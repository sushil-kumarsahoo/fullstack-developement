import { PrismaClient } from '../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { createBlogInput,updateBlogInput } from '@sushill7847/medium-common'


type Bindings = {
    DATABASE_URL: string,
    JWT_SECRET: string,
}
type Variables = {
    userId: string;
}
type JwtPayload = {
    id: string,
}

export const blogRouter = new Hono<{ Bindings: Bindings, Variables: Variables }>();

blogRouter.use("/*", async (c, next) => {
    const auth = c.req.header('Authorization') || "";
    if (!auth || !auth.startsWith('Bearer ')) {
        return c.json({ message: 'Forbidden' }, 403)
    }
    const token = auth.split(' ')[1]
    try {
        const user = await verify(token, c.env.JWT_SECRET, 'HS256') as JwtPayload
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            return c.json({ message: "you are not logged in" }, 403)
        }

    }
    catch (e) {
        return c.json({ error: "internal server error" }, 500)
    }

})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const success = createBlogInput.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({
            message:"Invalid inputs"
        })
    }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.create({

            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            },
        })

        return c.json({
            id: blog.id
        });
    } catch (e) {
        return c.json({ error: "internal server error" }, 500)
    }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const success = updateBlogInput.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({
            message:"Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
            id: blog.id
        });
    } catch (e) {
        return c.json({ error: 'Failed to update blog' }, 500)
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json({
            blogs
        })
    } catch (e) {
        c.json({ error: "internal server error" }, 500)
    }
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true,
                        
                    }
                   
                }
            }
        })

        return c.json({
            blog
        });
    } catch (e) {
        c.status(411)
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})


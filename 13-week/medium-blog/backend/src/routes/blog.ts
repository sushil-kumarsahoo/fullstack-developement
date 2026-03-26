import { PrismaClient } from '../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'

type Bindings = {
    DATABASE_URL: string,
    JWT_SECRET: string,
}
type Variables = {
    userId: string
}
type JwtPayload = {
    id: string
}

export const blogRouter = new Hono<{ Bindings: Bindings, Variables: Variables }>();

blogRouter.use("/*", async (c, next) => {
    await next();
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   try{
     const blog = await prisma.post.create({

        data: {
            title: body.title,
            content: body.content,
            authorId: "1"
        },
    })

    return c.json({
        id: blog.id
    });
   } catch(e){
    return c.json({error:"internal server error"},500)
   }
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
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
    } catch(e){
         return c.json({ error: 'Failed to update blog' }, 500)
    }
})

blogRouter.get('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.post.findFirst({
        where: {
            id: body.id
        },
    })

    return c.json({
        blog
    });
    } catch(e){
        c.status(411)
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})
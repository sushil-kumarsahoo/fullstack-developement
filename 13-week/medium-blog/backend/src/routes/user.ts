import { PrismaClient } from '../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput,signinInput } from '@sushill7847/medium-common'


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

export const userRouter = new Hono<{ Bindings: Bindings, Variables: Variables }>();


userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const success = signupInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message: "invalid input"
        })
    }
    const prisma = new PrismaClient({
        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({
            jwt: token
        })
    } catch (e) {
        c.status(403);
        return c.json({ error: "error while signing up " })
    }
})

userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const success = signinInput.safeParse(body);

    if(!success){
        c.status(403)
        return c.json({
            message:"invalid input"
        })
    }
    const prisma = new PrismaClient({
        accelerateUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });

        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }

        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt })
    }
    catch (e) {
        c.status(411)
        return c.text('Invalid')
    }
})
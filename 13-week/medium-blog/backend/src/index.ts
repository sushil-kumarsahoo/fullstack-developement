import { PrismaClient } from './generated/prisma/client'
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

const app = new Hono<{ Bindings: Bindings, Variables: Variables }>()



app.use('/api/v1/blog/*', async (c, next) => {
  const auth = c.req.header('Authorization') || "";

  if (!auth || !auth.startsWith('Bearer ')) {
    return c.json({ message: 'Forbidden' }, 403)
  }

  const token = auth.split(" ")[1]
  try {
    const payload = await verify(token, c.env.JWT_SECRET, 'HS256') as JwtPayload
    if (payload.id) {
      c.set('userId', payload.id)
      await next()
    }
    else {
      c.status(403)
      return c.json({ error: "unauthorized" }, 403)
    }
  }
  catch (e) {
    return c.json({ error: 'Invalid or expired token' }, 403)
  }
})


app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
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

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
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

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})


export default app 

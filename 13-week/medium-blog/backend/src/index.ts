import { PrismaClient } from './generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { use } from 'hono/jsx'
import { decode, sign, verify } from 'hono/jwt'
import { error } from 'node:console'


type Bindings = {
  DATABASE_URL: string,
  JWT_SECRET: string
}
const app = new Hono<{ Bindings: Bindings }>()


app.post('/api/v1/signup', async(c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  try {
 const user = await prisma.user.create({
    data:{
      email:body.email,
      password:body.password,
    },
  })
  const token = await sign({ id: user.id},c.env.JWT_SECRET )
  return c.json({
    jwt:token
  })
} catch(e){
  c.status(403);
  return c.json({error: "error while signing up"})
}
})

app.post('/api/v1/signin', async(c) => {
   const prisma = new PrismaClient({
    accelerateUrl:c.env?.DATABASE_URL
   }).$extends(withAccelerate());

   const body = await c.req.json();
   const user = await prisma.user.findUnique({
    where:{
      email: body.email
    }
   });

   if(!user){
    c.status(403);
    return c.json({error: "user not found"});
   }

   const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
  return c.json({jwt})
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

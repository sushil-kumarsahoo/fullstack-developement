import { PrismaClient } from './generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { userRouter } from './routes/user'



// type Bindings = {
//   DATABASE_URL: string,
//   JWT_SECRET: string,
// }
// type Variables = {
//   userId: string
// }
// type JwtPayload = {
//   id: string
// }

const app = new Hono()

app.route('/api/v1/user', userRouter);
//app.route('/api/v1/blog', blogRouter)





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

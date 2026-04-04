import 'dotenv/config'
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const client = new PrismaClient({ adapter })

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Healthy server' })
})

app.post('/', async (req, res) => {
  await client.user.create({
    data: {
      email: req.body.email,
      name: req.body.name
    }
  })
  res.json({ message: 'Done signing up!' })
})

app.listen(3000, () => console.log('Server running on port 3000'))
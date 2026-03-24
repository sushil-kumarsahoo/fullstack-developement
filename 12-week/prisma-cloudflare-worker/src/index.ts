import { PrismaClient } from "../generated/prisma/edge"
import { withAccelerate } from "@prisma/extension-accelerate"

export default {
  async fetch(req: Request, env: any) {

    const prisma = new PrismaClient({
      accelerateUrl: env.DATABASE_URL, 
    }).$extends(withAccelerate())

     await prisma.user.upsert({
  where: { email: "sushil@example.com" },
  update:{ name :"sushil kumar"},
  create: {
    name: "Sushil",
    email: "sushil@example.com",
  },
})
    const users = await prisma.user.findMany()

    return new Response(JSON.stringify(users))
  },
}
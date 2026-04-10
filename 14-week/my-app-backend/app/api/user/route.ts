import { NextRequest } from "next/server"
import { PrismaClient } from "@/app/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log("DATABASE_URL:", process.env.DATABASE_URL)

    const user = await prisma.user.create({
      data: {
        //name: body.name,
        username: body.email,
        password: body.password
      }
    })

    return Response.json(user)
  } catch (err) {
    console.error(err)
    return Response.json({ error: "Something went wrong" }, { status: 500 })
  }
}
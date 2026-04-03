import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        email: "sushi@gmail.com",
        name: "sushil"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
   try{
     await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    })
    return NextResponse.json({
        body
    })
   }
   catch(e){
    console.log(e)
    return NextResponse.json({
        message: "error while sign up",
      },{
        status:411
      })
   }
    
}
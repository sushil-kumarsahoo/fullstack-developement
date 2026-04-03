import { NextRequest, NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        email:"sushi@gmail.com",
        name: "sushil"
    })
}

export async function POST(req:NextRequest){
   const body = await req.json();
   
   return NextResponse.json({
    body
   })
}
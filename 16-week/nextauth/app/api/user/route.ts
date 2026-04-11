import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";

export async function GET(){
    const session = await getServerSession(NEXT_AUTH);
    return NextResponse.json({
        session
    })
}
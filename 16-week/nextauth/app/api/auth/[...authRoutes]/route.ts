import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { authRoutes: string[] } }) {
    const resolvedParams = await params;
    console.log(resolvedParams);

    return NextResponse.json({
        message: "asd"
    })
}

export function POST() {
    return NextResponse.json({
        Message: "asd"
    })
}
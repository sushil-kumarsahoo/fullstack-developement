
import {  NextResponse } from "next/server";
import {NextRequest} from "next/server"


export function middleware(req: NextRequest){
  console.log(req.nextUrl.pathname);
  if(req.nextUrl.pathname.startsWith('/admin')){
    return NextResponse.redirect(new URL('/signin',req.url))
  }
  if(req.nextUrl.pathname.startsWith('/dashboard')){
    return NextResponse.next()
  }
  
}


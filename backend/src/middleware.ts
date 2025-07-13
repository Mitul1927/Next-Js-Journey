import { NextRequest,NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const isLoggedIn = false;
    if(!isLoggedIn){
        return NextResponse.redirect(new URL("/register",request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:"/dashboard",
}
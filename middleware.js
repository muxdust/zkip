import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("zkip-token")?.value;

  if (!token) {
    console.log("No token found");
  }

  const { pathname } = request.nextUrl;

  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }

  if (!token && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard"],
};

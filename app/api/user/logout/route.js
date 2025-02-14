import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { message: "User logged out successfully" },
    { status: 200 }
  );

  response.cookies.set("zkip-token", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });

  return response;
}

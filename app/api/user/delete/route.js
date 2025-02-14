import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function DELETE(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Invalid or missing token" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    await dbClient.user.delete({
      where: {
        email: email,
      },
    });

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

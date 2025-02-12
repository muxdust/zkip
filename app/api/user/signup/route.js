import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  const { name, username, email, password } = await request.json();

  if (!name || !username || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const existingEmail = await dbClient.user.findUnique({ where: { email } });

    if (existingEmail) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const existingUsername = await dbClient.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await dbClient.user.create({
      data: { name, username, email, password: hashedPassword },
    });

    return NextResponse.json(
      { message: "User signup successfully", user: newUser },
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

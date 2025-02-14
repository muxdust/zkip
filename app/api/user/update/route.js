import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function PUT(request) {
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

    const { name, username, profileImage, password } = await request.json();

    const updateData = {
      name,
      username,
      profileImage,
    };

    if (password) {
      const hashedPassword = await bcryptjs.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const user = await dbClient.user.update({
      where: { email },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Updated successfully", user },
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

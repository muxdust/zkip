import { NextResponse } from "next/server";
import tokenData from "@/helpers/tokenData";
import dbClient from "@/prisma/dbClient";

export async function PUT(request) {
  const { email } = tokenData(request).data;
  const { name, username, profileImage, password } = await request.json();

  try {
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
      where: {
        email: email,
      },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Updated successfully" },
      { status: 200 },
      { user }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

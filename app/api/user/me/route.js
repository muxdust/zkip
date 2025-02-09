import { NextResponse } from "next/server";
import tokenData from "@/helpers/tokenData";
import dbClient from "@/prisma/dbClient";

export async function GET(request) {
  const { email } = tokenData(request).data;

  try {
    const user = await dbClient.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        profileImage: true,
        links: true,
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

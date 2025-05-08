import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request) {
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

    const { originalUrl } = await request.json();

    if (!originalUrl) {
      return NextResponse.json({ message: "Url is required" }, { status: 400 });
    }

    const generatelinkId = () => {
      const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 6; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    let linkId;
    let isUnique = false;

    while (!isUnique) {
      linkId = generatelinkId();
      const existingKey = await dbClient.link.findUnique({
        where: { linkId },
      });
      if (!existingKey) {
        isUnique = true;
      }
    }

    const shortUrl = `${process.env.BASE_URL}/${linkId}`;

    const link = await dbClient.link.create({
      data: {
        originalUrl,
        linkId,
        shortUrl,
        user: {
          connect: { email },
        },
      },
    });

    return NextResponse.json(
      { message: "Link shortened successfully", link },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import tokenData from "@/helpers/tokenData";
import dbClient from "@/prisma/dbClient";

export async function POST(request) {
  const { email } = tokenData(request).data;
  const { originalUrl } = await request.json();

  if (!originalUrl) {
    return NextResponse.json({ message: "Url is required" }, { status: 400 });
  }

  try {
    const generateShortKey = () => {
      const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 6; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    let shortKey;
    let isUnique = false;

    while (!isUnique) {
      shortKey = generateShortKey();
      const existingKey = await dbClient.link.findUnique({
        where: { shortKey },
      });
      if (!existingKey) {
        isUnique = true;
      }
    }

    const link = await dbClient.link.create({
      data: {
        originalUrl,
        shortKey,
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

import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const shortKey = searchParams.get("shortKey");

  console.log(shortKey);

  try {
    await dbClient.link.delete({
      where: {
        shortKey: shortKey,
      },
    });

    return NextResponse.json(
      { message: "Link deleted successfully" },
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

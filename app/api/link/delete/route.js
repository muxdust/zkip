import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const linkId = searchParams.get("linkId");

  console.log(linkId);

  try {
    await dbClient.link.delete({
      where: {
        id: linkId,
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

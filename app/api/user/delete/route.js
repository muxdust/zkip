import { NextResponse } from "next/server";
import tokenData from "@/helpers/tokenData";
import dbClient from "@/prisma/dbClient";

export async function DELETE(request) {
  const { email } = tokenData(request).data;

  try {
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

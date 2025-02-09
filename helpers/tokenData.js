import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default function tokenData(request) {
  try {
    const token = request.cookies["zkip-token"]?.value || "";

    if (!token) {
      return NextResponse.json({ message: "Token not found" }, { status: 404 });
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    return {
      data: {
        id: data.id,
        email: data.email,
        role: data.role,
      },
    };
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Token verification failed" },
      { status: 500 }
    );
  }
}

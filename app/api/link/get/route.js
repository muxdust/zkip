import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import { LRUCache } from "next/dist/server/lib/lru-cache";

const cache = new LRUCache({ max: 500, maxAge: 1000 * 60 * 60 });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shortKey = searchParams.get("shortKey");

  if (!shortKey) {
    return NextResponse.json({ message: "Missing shortKey" }, { status: 400 });
  }

  const cachedLongUrl = cache.get(shortKey);
  if (cachedLongUrl) {
    return NextResponse.json({ longUrl: cachedLongUrl }, { status: 200 });
  }

  try {
    const link = await dbClient.link.findUnique({
      where: { shortKey },
      select: { longUrl: true },
    });

    if (!link) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    cache.set(shortKey, link.longUrl);

    return NextResponse.json({ longUrl: link.longUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

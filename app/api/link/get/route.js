import { NextResponse } from "next/server";
import dbClient from "@/prisma/dbClient";
import { LRUCache } from "next/dist/server/lib/lru-cache";

const cache = new LRUCache({ max: 500, maxAge: 1000 * 60 * 60 });

const updateCount = async (linkId) => {
  try {
    await dbClient.link.update({
      where: { linkId },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const linkId = searchParams.get("linkId");

  if (!linkId) {
    return NextResponse.json({ message: "Missing linkId" }, { status: 400 });
  }

  const cachedLongUrl = cache.get(linkId);
  if (cachedLongUrl) {
    updateCount(linkId);
    return NextResponse.json({ longUrl: cachedLongUrl }, { status: 200 });
  }

  try {
    const link = await dbClient.link.findUnique({
      where: { linkId },
      select: { originalUrl: true },
    });

    if (!link) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    cache.set(linkId, link.originalUrl);

    updateCount(linkId);

    return NextResponse.json({ longUrl: link.originalUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

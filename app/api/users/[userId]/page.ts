import { type NextRequest } from "next/server";
import prisma from "@/libs/prismadb";
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    })
  }

  try {
    const userId = params.slug;
    if (!userId || typeof userId !== "string") {
      throw new Error("invalid ID");
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return new Response(JSON.stringify({ ...existingUser, followersCount }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response("error", {
      status: 400,
    });
  }
}

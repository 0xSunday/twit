import { type NextRequest } from "next/server";
// import prisma from "@/libs/prismadb";
import prisma from "../../../libs/prismadb";
export async function GET(request: NextRequest) {
  if (request.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("users", JSON.stringify(users));
    return new Response(JSON.stringify({ users }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response("Error", {
      status: 400,
    });
  }
}

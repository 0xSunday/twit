import serverAuth from "@/libs/serverAuth";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (request.method !== "GET") {

    return new Response("Method not allowed", {
      status: 405,
    });
  }

  try {
    const { currentUser } = await serverAuth();
    return new Response(JSON.stringify({ currentUser }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
}
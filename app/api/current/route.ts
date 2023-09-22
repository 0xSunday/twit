// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";

export default async function GET(req: Request) {
  if (req.method !== "GET") {
    return new Response("error");
  }

  try {
    const { currentUser } = await serverAuth(req, Response);

    return new Response(JSON.stringify({ currentUser }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("error", {
      status: 405,
    });
  }
}

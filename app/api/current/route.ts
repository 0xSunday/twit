import serverAuth from "@/libs/serverAuth";
// import { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (request.method !== "GET") {
    // return res.status(405).send("Method not allowed");

    return new Response("Method not allowed", {
      status: 405,
    });
  }

  try {
    const { currentUser } = await serverAuth();
    // return res.status(200).json({ currentUser });
    return new Response(JSON.stringify({ currentUser }), {
      status: 200,
    });
  } catch (error: any) {
    // return res.status(401).send("Unauthorized");
    return new Response("Unauthorized", {
      status: 401,
    });
  }
}

// import serverAuth from "@/libs/serverAuth";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).send("Method not allowed");
//   }

//   try {
//     const { currentUser } = await serverAuth(req, res);
//     return res.status(200).json({ currentUser });
//   } catch (error: any) {
//     return res.status(401).send("Unauthorized");
//   }
// }

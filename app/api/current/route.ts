import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).send("Method not allowed");
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    return res.status(200).json({ currentUser });
  } catch (error: any) {
    return res.status(401).send("Unauthorized");
  }
}

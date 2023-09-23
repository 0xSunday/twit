import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    return res.status(200).json(currentUser);
  } catch (error: any) {
    return res.status(401).end();
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';

// import serverAuth from '@/libs/serverAuth';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).end();
//   }

//   try {
//     const { currentUser } = await serverAuth(req, res);

//     return res.status(200).json(currentUser);
//   } catch (error) {
//     console.error(error); // Changed console.log to console.error for error messages
//     return res.status(500).json({ error: 'Internal Server Error' }); // Changed status code to 500 for internal server errors
//   }
// }

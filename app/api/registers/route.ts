import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";

export async function GET(request: Request) {
  return new Response("hi");
}

export async function POST(req: Request) {
  const body = await req.json();

  // console.log(body);

  try {
    const { name, username, email, password } = await body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name,
        username: username,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    console.log("User created:", user);
    return new Response("ok", {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("not ok", {
      status: 400,
    });
  }
}
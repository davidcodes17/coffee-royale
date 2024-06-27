import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const secrect = "secret-key";
const prisma = new PrismaClient();
export const GET = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return {
      error: "Not Allowed",
    };
  }

  const decoded: any = jwt.verify(token, secrect);
  const user = await prisma.user.findFirst({
    where: {
      id: decoded.id,
    },
    select: {
      username: true,
      email: true,
      id: true,
    },
  });

  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 400 });

  return NextResponse.json({ user: user });
};

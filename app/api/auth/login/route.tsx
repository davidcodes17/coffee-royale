import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const secrect = "secret-key";
export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    if (!email && !password)
      return NextResponse.json({
        status: 400,
        error: "All field are required",
      });

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user)
      return NextResponse.json({ error: "Incorrect Email" }, { status: 400 });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return NextResponse.json({ status: 400, error: "Incorrect Password" });

    const token = jwt.sign({ id: user.id }, secrect, {
      expiresIn: "1hr",
    });

    const response = NextResponse.json(
      { msg: "Login Successfully" },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      expires: new Date().setDate(new Date().getDate() + 1),
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  }
};

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const secrect = "secret-key";
export const POST = async (req: NextRequest) => {
  try {
    const { username, email, password } = await req.json();

    if (!email && !username && !password)
      return NextResponse.json({
        status: 400,
        error: "All field are required",
      });

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user)
      return NextResponse.json({ status: 400, error: "User already Exsists" });

    //@ts-ignore
    const hashedPassword = await bcrypt.hash(password, 18);

    const saveUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    //@ts-ignore
    const token = jwt.sign({ id: saveUser.id }, secrect, {
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

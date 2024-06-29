import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

// Secret key should be stored in an environment variable for security reasons.
const secret = process.env.JWT_SECRET || "secret-key";
const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.get("token")?.value;

    // Check if the token is available
    if (!token) {
      return NextResponse.json({ error: "Not Allowed" }, { status: 401 });
    }

    // Verify the JWT token
    let decoded: any;
    try {
      decoded = jwt.verify(token, secret);
    } catch (err) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Find the user in the database
    const user = await prisma.user.findFirst({
      where: { id: decoded.id },
      select: {
        username: true,
        email: true,
        id: true,
      },
    });

    // If the user does not exist, return an error response
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 400 });
    }

    // Return the user data in the response
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
  try {
    const { name, price, description, ratting, image } = await req.json();

    if (!name && !price && !description && !ratting && !image)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );

    const isPresent = await prisma.product.findFirst({
      where: {
        name: name,
      },
    });

    if (isPresent)
      return NextResponse.json(
        { error: "Product already Exists" },
        { status: 400 }
      );

    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        image: image,
        ratting: ratting,
      },
    });

    return NextResponse.json(
      { msg: "Product Addedd Sucessfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const products = await prisma.product.findMany({});
    return NextResponse.json({ products: products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params }: { params: any }) => {
  try {
    const id = params.id;

    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    if (!product)
      return NextResponse.json({ error: "Product Not Found" }, { status: 400 });
    return NextResponse.json(
      { msg: "Success", product: product },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
};

export const PUT = async (req: NextRequest, { params }: { params: any }) => {
  try {
    const { id } = params;
    const { name, price, description, ratting, image } = await req.json();

    if (!name && !price && !description && !ratting && !image)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );

    const product = await prisma.product.update({
      data: {
        name: name,
        price: price,
        description: description,
        ratting: ratting,
        image: image,
      },
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { msg: "Product Updated Successfully" },
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

export const DELETE = async (req: NextRequest, { params }: { params: any }) => {
  try {
    const { id } = params;

    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    if (!product)
      return NextResponse.json({ error: "Product Not Found" }, { status: 400 });

    const deleteProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { msg: "Product Deleted Successfully" },
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

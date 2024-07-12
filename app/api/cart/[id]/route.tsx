import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    const carts = await prisma.cart.findMany({
      where: {
        userId: user.id,
      },
      include: {
        product: true,
        user: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });

    return NextResponse.json({ orders: carts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest, { params }: { params: any }) => {
  try {
    const { id } = params;
    const { quantity } = await req.json();

    const isPresent = await prisma.cart.findFirst({
      where: {
        id: id,
      },
      include: {
        product: true,
      },
    });

    if (!isPresent)
      return NextResponse.json({ error: "Cart Not Found" }, { status: 400 });

    const cart = await prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        productId: isPresent.productId,
        quantity: quantity,
      },
    });

    return NextResponse.json({ msg: "Success" });
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

    const isPresent = await prisma.cart.findFirst({
      where: {
        id: id,
      },
    });

    if (!isPresent)
      return NextResponse.json({ error: "Cart Not Found" }, { status: 400 });

    const cart = await prisma.cart.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "Cart Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

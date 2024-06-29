import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const { userId, productId, quantity } = await req.json();

    const findProduct = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });

    if (!findProduct)
      return NextResponse.json({ error: "Product Not Found" }, { status: 400 });

    const isCartExsisting = await prisma.cart.findFirst({
      where: {
        productId: productId,
      },
    });

    const cartExsists = await prisma.cart.findFirst({
      where: {
        userId: userId,
        AND: {
          productId: productId,
        },
      },
    });

    if (cartExsists) {
      const cartProdct = await prisma.cart.update({
        where: {
          id: cartExsists.id,
        },
        data: {
          quantity: Number(quantity),
        },
      });
      return NextResponse.json({ msg: "Updated Carts" }, { status: 200 });
    } else {
      const cartProdct = await prisma.cart.create({
        data: {
          productId: productId,
          userId: userId,
          quantity: Number(quantity),
        },
      });
      return NextResponse.json({ msg: "Added to Cart" }, { status: 200 });
    }
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
    const orders = await prisma.cart.findMany({
      include: {
        product: true,
        user: {
          select: {
            id: true,
            email: true,
            createdAt: true,
          },
        },
      },
    });
    return NextResponse.json({ orders: orders }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { userId } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user)
      return NextResponse.json({ error: "User Not Found" }, { status: 400 });

    const cart = await prisma.cart.deleteMany({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

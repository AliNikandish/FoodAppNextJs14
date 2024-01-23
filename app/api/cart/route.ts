import prisma from "@/lib/prismadb";
import { verifyToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    const tokenPayload: any = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { email: tokenPayload.email },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    const tokenPayload: any = verifyToken(token);
    const body = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: tokenPayload.email },
    });
    const prevCart = user?.Cart;

    if (prevCart!.length > 0) {
      const UpdateUser = await prisma.user.update({
        where: { id: user?.id },
        data: {
          Cart: [...prevCart!, { ...body }],
        },
      });

      return NextResponse.json(UpdateUser.Cart);
    } else {
      const UpdateUser = await prisma.user.update({
        where: { id: user?.id },
        data: {
          Cart: [{ ...body }],
        },
      });
      return NextResponse.json(UpdateUser.Cart);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    const tokenPayload: any = verifyToken(token);
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: tokenPayload.email },
    });
    const prevCart = user?.Cart;
    const UpdatedCart = prevCart?.map((item) => {
      if (item.size === body.size && item.productId === body.productId) {
        return { ...body };
      }
      return item;
    });

    const UpdateUser = await prisma.user.update({
      where: { id: user?.id },
      data: {
        Cart: UpdatedCart,
      },
    });


    return NextResponse.json(UpdateUser.Cart);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    const tokenPayload: any = verifyToken(token);
    const body = await req.json();

    
    const user = await prisma.user.findUnique({
      where: { email: tokenPayload.email },
    });
    const prevCart = user?.Cart;
    const UpdatedCart = prevCart?.filter((item) => {
      if (item.size === body.size && item.productId === body.productId) {
        return null;
      } 
        return item;
    });
    
    if(body.deleteALL === true){      
      const UpdateUser = await prisma.user.update({
        where: { id: user?.id },
        data: {
          Cart:[]
        },
      });
      return NextResponse.json(UpdateUser.Cart);
    }

    const UpdateUser = await prisma.user.update({
      where: { id: user?.id },
      data: {
        Cart: UpdatedCart,
      },
    });

    return NextResponse.json(UpdateUser.Cart);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

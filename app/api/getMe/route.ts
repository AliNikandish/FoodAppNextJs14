import prisma from "@/lib/prismadb";
import { verifyToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (token === "") {
      return NextResponse.json(
        { message: "You are not login !!" },
        { status: 401 }
      );
    }

    const tokenPayload: any = verifyToken(token);

    if (Object.keys(tokenPayload).length <= 0) {
      return NextResponse.json(
        { message: "You are not login !!" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: tokenPayload.email,
      },
    });

    if (user) {
      return NextResponse.json({ user });
    }
    
  } catch (error) {
    return NextResponse.json(
      { message: "UnKnown Internal Server Erorr !!" },
      { status: 500 }
    );
  }
}

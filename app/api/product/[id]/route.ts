import prisma from "@/lib/prismadb"; 
import { NextResponse } from "next/server";


export async function GET(req: Request,
  { params }: { params: { id: string } }) {
    try {
      const {id}=params
      const product = await prisma.product.findUnique({ where: { id } });
        return NextResponse.json(product);
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          { message: "Some error occured" },
          { status: 500 }
        );
      }
}

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request,
    { params }: { params: { catName: string } }) {
      try {
        const {catName}=params

        const products = await prisma.category.findMany({ where: { title:catName},include: {
            Product: {include: { category:true }},
          }, });
          const asynProduct= await products[0]
          return NextResponse.json(asynProduct);
        } catch (error) {
          console.log(error);
          return NextResponse.json(
            { message: "Some error occured" },
            { status: 500 }
          );
        }
  }
  
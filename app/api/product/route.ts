import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({});

    return NextResponse.json(products);
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
    const body = await req.json();


    const category:any = await prisma.category.findFirst({
      where: { title: body.selectedCategory },
    });

    const newProduct = await prisma.product.create({
      data: {
        image: body.imageUrl,
        BasePrice: body.basePrice,
        description: body.description,
        categoryName: body.selectedCategory,
        title: body.title,
        size: body.sizes,
        categoryId: category?.id,
        
      },
    });

    return NextResponse.json("your product created successfully");
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

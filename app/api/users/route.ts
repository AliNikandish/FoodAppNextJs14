import prisma from "@/lib/prismadb";
import { verifyToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const users=await prisma.user.findMany()
    return NextResponse.json(users);
  
  }

export async function PUT(req: NextRequest) {

  const body = await req.json();
  const {Addres,name,imageProfile:image}=body

  const token = req.cookies.get("token")?.value;
  const tokenPayload: any = verifyToken(token);

  const user = await prisma.user.update({
   where:{email: tokenPayload.email},data:{
    Addres,
    name,
    image
   }
  });
  

    return NextResponse.json('users updated succesfully');
  
  }
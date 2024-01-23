import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,params:any) {


    
  
    const user = await prisma.user.findUnique({
      where: { id:params.params.id},
    });
  
  
    const orders=await prisma.order.findMany({where:{userID:user?.id}})
    
  
    return NextResponse.json(orders);
  
  }
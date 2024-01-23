import prisma from "@/lib/prismadb";
import { verifyToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
 try {

    const token = req.cookies.get("token")?.value;
    const tokenPayload: any = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { email: tokenPayload.email },
    });
    const body = await req.json();
  
  
    
    const newOrder= await prisma.order.create({
        data:{
             cart:[...body.cart],userID:user?.id!,tottalPrice:String(body.tottalPrice)
        }
    })
  
    
  
    return NextResponse.json("your order submitted succesfully");
    
 } catch (error) {
    console.log(error);
        return NextResponse.json(
          { message: "Some error occured" },
          { status: 500 }
        );
 }
}


export async function GET(req: NextRequest) {

  // const token = req.cookies.get("token")?.value;

  // const tokenPayload: any = verifyToken(token);

  // const user = await prisma.user.findUnique({
  //   where: { email: tokenPayload.email },
  // });

  // if(user?.role!=='admin'){
  //   return NextResponse.json(
  //     { message: "un Authorized" },
  //     { status: 421 }
  //   );
  // }

  const orders=await prisma.order.findMany()

  return NextResponse.json(orders);

}
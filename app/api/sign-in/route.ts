import prisma from "@/lib/prismadb";
import { generateToken, hashPassword, verifyPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function  POST(req:Request){

  
    try {

        const {identifier,password}:any= await req.json()
        if (!identifier.trim() || !password.trim()) {
            return NextResponse.json({ message: "Data is not valid !!" },{status:422});
          }
          const isUserExist = await prisma.user.findMany({
            where: {
              AND: [
                {
                  OR: [
                    { email: { contains: identifier } },
                    { userName: { contains: identifier } },
                  ],
                },
              ],
            },
          });

      
        
          const token=generateToken({email:isUserExist[0].email})
    
          
          const response = NextResponse.json(
            {
              user:isUserExist[0]
            },
            { status: 200 }
          )


          const cookie = serialize("token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 0,
          });
          
       

        response.cookies.set({
          name: "token",
          value: token,
          maxAge: 60*60*24,
          path:"/"
        });


          return response
            
    } catch (error) {
        return NextResponse.json({ message: "UnKnown Internal Server Erorr !!" });
    }
   
}
import prisma from "@/lib/prismadb";
import { generateToken, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, userName, email, password,address }: any = await req.json();

  

  if (
    !address.trim() ||
    !name.trim() ||
    !userName.trim() ||
    !email.trim() ||
    !password.trim()
  ) {
    return NextResponse.json(
      { message: "Data is not valid !!" },
      { status: 422 }
    );
  }


  const isUserExist = await prisma.user.findMany({
    where: {
      AND: [
        {
          OR: [
            { email: { contains: email && email } },
            { userName: { contains: userName && userName } },
          ],
        },
      ],
    },
  });

  

  if (isUserExist.length<0) {
    return NextResponse.json(
      { message: "This username or email exist already !!" },
      { status: 422 }
    );
  }



  const hashedPassword = await hashPassword(password);
  const token = generateToken({ email });


  
  const newUser = await prisma.user.create({
    data: {
      userName: userName,
      email,
      password:hashedPassword,
      name,
      role: "user",
      Addres:address,
      
    },
  });
  


  const response = NextResponse.json(
    {
        message: "User Logged In Successfully :))"
    },
    { status: 200 }
  )


  response.cookies.set({
    name: "token",
    value: token,
    maxAge: 60*60*24,
    path:"/"
  });


    return response
}

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  try {
    const comments = await prisma.comment.findMany({
      where: { productId: postId },
    });
    const authors = await prisma.user.findMany({});
    const newComments = comments.map((comment) => {
      const author = authors.find(
        (author) => author.email === comment.authorEmail
      );
      const commentDetails = { commentDetail: comment, authorDetails: author };
      return commentDetails;
    });    
    return NextResponse.json(newComments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const productId = postId;
  const { content, authorEmail }: { content:string, authorEmail:string} = await req.json();
  try {
   
    const comment = await prisma.comment.create({
      data: {
        content,authorEmail,productId,
      },
    });
    
    return NextResponse.json("newComments");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

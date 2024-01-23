import prisma from "@/lib/prismadb"; 
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const comments = await prisma.comment.findMany({});
        const authors=await prisma.user.findMany({})
        const products=await prisma.product.findMany({})
        const newComments= comments.map(comment=>{
          const author=authors.find(author=>author.email===comment.authorEmail)  
          const  product =products.find(product=>product.id===comment.productId)                 
          const commentDetails={...comment,authorName:author?.name,authorImage:author?.image,productName:product?.title}
          
          return commentDetails
      })      

        return NextResponse.json(newComments!.reverse());
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          { message: "Some error occured" },
          { status: 500 }
        );
      }
}

import Slider from "@/components/Slider";
import { Product } from "@prisma/client";
import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'


const getProduct = async (catName: string): Promise<Product | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/category/${catName}`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { catName }:any = params;

  const products: any = await getProduct(catName);


  return {
    title: `${products.title}-فود`,
  }
}

const page = async ({ params }: { params: { catName: string } }) => {
  const { catName } = params;
  const products: any = await getProduct(catName);

  if (products.Product) {
    return (
      <div className="mt-16 max-w-[1640px] mx-auto p-4 py-12 min-h-screen ">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">
          {products.title}
        </h1>

        <Slider component={products.Product} type="lastprodunct"/>
      </div>
    );
  }
};

export default page;

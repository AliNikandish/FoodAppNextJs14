import ProductDetail from "@/components/ProductDetail";
import ProductTabs from "@/components/ProductTabs";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'

 const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

 const getComments = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/comments/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const comments = await res.json();
      return comments;
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
  // read route params
  const id = params.id
 
  // fetch data
  const product = await getProduct(id);

  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: `${product?.title}- فود`,
  }
}


const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await getProduct(id);
  const comments: any = await getComments(id);
  
  if (product) {
    const {
      title,
      description,
      categoryName,
      BasePrice,
      score,
      image,
      size,
      extra,
    }: any = product;

    return (
      <section className="mt-5 py-12 sm:py-16">
        <div className="max-w-7xl container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="h-full w-full max-w-full object-cover"
                      src={image}
                      alt=""
                      height={400}
                      width={400}
                    />
                  </div>
                </div>
              </div>
            </div>

            <ProductDetail
              title={title}
              categoryName={categoryName}
              comments={comments}
              size={size}
              extra={extra}
              BasePrice={BasePrice}
              product={product}
            />

            <ProductTabs comments={comments} description={description} />
          </div>
        </div>
      </section>
    );
  } else {
    return <div className="mt-20">چنین محصولی وجود ندارد</div>;
  }
};

export default page;

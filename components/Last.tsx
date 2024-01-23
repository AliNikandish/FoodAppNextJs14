import React from "react";
import Slider from "./Slider";


export const getLastProduct = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`, {
      cache: "no-store",
    });

    if (res.ok) {
      const lastProduct = await res.json();
      return lastProduct;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const Best = async () => {

  const lastProduct=await getLastProduct()  
  
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 ">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">
        آخرین محصولات
      </h1>
      <Slider component={lastProduct ?lastProduct.reverse() :<div></div>} type="lastprodunct"/>
    </div>
  );
};

export default Best;

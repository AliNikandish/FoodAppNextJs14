"use client";

import { CartContext } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";



type cart = {
  amount: string
  price: string
  productCategory: string
  productId: string
  productImage: string
  productTitle: string
  size: string
};

const ProductDetail = ({
  title,
  categoryName,
  comments,
  size,
  extra,
  BasePrice,
  product,
}: any) => {
  const { myCart, setMycart,details ,isLoggedIn}: any = useContext(CartContext);

  const [price, setPrice] = useState(BasePrice);
  const [sizeSelected, setSizeSelected] = useState("");
  const [amountVal, setAmountVal] = useState(1);


  const sizeHandler = (e: any, size: size) => {
    setPrice(Number(BasePrice) + Number(size.extraPrice));
    setSizeSelected(size.title);
    const elem: any = document.getElementsByClassName("extrabox");

    for (let index = 0; index < elem.length; index++) {
      elem[index].checked = false;
    }
  };

  const addToCart = async () => {

    if(!isLoggedIn){
      Swal.fire({
        title: "توجه!",
        text: "برای خرید ابتدا باید وارد شوید",
        icon: "warning"
      });
      return null;
    }

    if (sizeSelected === "") {
      alert("ابتدا سایز رو انتخاب کنید");
      return null;
    }
    let isInCart = myCart.some((item: cart) => {
      return item.productId === product.id && item.size === sizeSelected;
    });

    let hasproduct = myCart.filter((item: cart) => {
      return item.productId === product.id && item.size === sizeSelected;
    });

    const newCart = {
      size: sizeSelected,
      price: String(price),
      productId: product.id,
      productTitle: product.title,
      productImage: product.image,
      productCategory: product.categoryName,
      amount: isInCart
        ? String(Number(hasproduct[0].amount) + amountVal)
        : String(amountVal),
    };

    if (isInCart) {
      const res = await fetch(`/api/cart/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...newCart,
        }),
      });

      if (res.ok) {
        const updatedCart = await res.json();
        setMycart(updatedCart);

        Swal.fire({
          title: "موفق",
          text: "این محصول قبلا در سبد خرید شما وجود داشت و یکی به تعداد آن اضافه شد",
          icon: "success",
        });

        
      } else {
        Swal.fire({
          title: "خطا",
          text: "برای اضافه شدن به سبد خرید با مشکل روبرو شد.",
          icon: "error",
        });
      }
    } else {
      const res = await fetch(`/api/cart/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...newCart,
        }),
      });

      const updatedCart = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "موفق",
          text: "با موفقیت به سبد خرید اضافه شد",
          icon: "success",
        });
        setMycart(updatedCart);
      } else {
        Swal.fire({
          title: "خطا",
          text: "برای اضافه شدن به سبد خرید با مشکل روبرو شد.",
          icon: "error",
        });
      }
    }
  };
  return (
    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <div className="flex items-center justify-between">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h1>
        <p className="px-3 bg-red-600 text-white rounded">{categoryName}</p>
      </div>

      <h2 className="mt-8 text-base text-gray-900">یک سایز رو انتخاب کنید</h2>
      <div className="mt-3 flex select-none flex-wrap items-center gap-1">
        {size.map((item: size) => {
          return (
            <label
              className="h-14"
              key={item.title}
              onClick={(e) => sizeHandler(e, item)}
            >
              <input
                type="radio"
                name="subscription"
                value={item.title}
                className="peer sr-only"
              />
              <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                {item.title}
              </p>
              <span className="mt-1 block text-center text-xs">
                {/* +{Number(item.extraPrice).toLocaleString()} */}
                {item.extraPrice !== "0"  && (`+ ${Number(item.extraPrice).toLocaleString()}`)}
              </span>
            </label>
          );
        })}
      </div>


      <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
        <div className="flex items-end">
          <h1 className="text-3xl font-bold">
            {Number(price).toLocaleString()}
          </h1>
          <span className="text-base">تومان</span>
        </div>

        <button
          onClick={addToCart}
          type="button"
          className="gap-x-2 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          افزودن به سبد خرید
        </button>
      </div>

      <ul className="mt-8 space-y-2">
        <li className="flex items-center text-left text-sm font-medium text-gray-600 gap-x-2">
          <svg
            className="mr-2 block h-5 w-5 align-middle text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              className=""
            ></path>
          </svg>
          ارسال به تمام نقاط شهر
        </li>

        <li className="flex items-center text-left text-sm font-medium text-gray-600 gap-x-2">
          <svg
            className="mr-2 block h-5 w-5 align-middle text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              className=""
            ></path>
          </svg>
          امکان پرداخت درب منزل
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;

"use client";

import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

type cart = {
  amount: string
  price: string
  productCategory:string
  productId: string
  productImage: string
  productTitle: string
  size: string
};
const Cart = () => {
  const { myCart, setMycart, details,isLoggedIn }: any = useContext(CartContext);
  const [tottalPrice, setTottalPrice] = useState(0);

  const [deliveryPrice, setDeliveryPrice] = useState(20000);
  const router = useRouter();


 useEffect(()=>{
  if (!isLoggedIn) {
    router.push("/sign-in");
  }
 },[router])

  useEffect(() => {
    const tottalArr = myCart.map((item: cart) => {
      return Number(item.price) * Number(item.amount);
    });

    const reduced = tottalArr.reduce((a: number, b: number) => {
      return a + b;
    }, 0);

    setTottalPrice(reduced);
  }, [myCart,details]);

  const submitOrder = async () => {
    if (myCart.length < 1) {
      alert("سبد خرید خالی است");
      return null;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tottalPrice: tottalPrice + deliveryPrice,
        cart: [...myCart],
      }),
    });

    if (res.ok) {
      Swal.fire({
        title: "موفق",
        text: "سفارش شما با موفقیت ثبت شد",
        icon: "success",
      });

      const res = await fetch(`/api/cart/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          deleteALL: true,
        }),
      });

      if (res.ok) {
        const updatedCart = await res.json();
        setMycart(updatedCart);
        router.refresh();
      }
    } else {
      Swal.fire({
        title: "خطا",
        text: "ثبت سفارش با خطا مواجه شد",
        icon: "error",
      });
    }
  };

  const removeFromCart = async (item: cart) => {
    const res = await fetch(`/api/cart/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...item,
      }),
    });

    if (res.ok) {
      const updatedCart = await res.json();
      setMycart(updatedCart);
      router.refresh();
    } else {
      alert("مشکلی در حذف آیتم پیش آمده است");
    }
  };

  const amountHandler = async (event: any, newItem: cart) => {
    const { id } = event.target;
    const newCart = { ...newItem, amount: String(Number(newItem.amount) + 1) };

    if (id === "increase") {
      const newCart = {
        ...newItem,
        amount: String(Number(newItem.amount) + 1),
      };

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
      } else {
        console.log(res);
      }
    } else if (id === "decrease") {
      if (Number(newItem.amount) == 1) {
        return null;
      }

      const newCart = {
        ...newItem,
        amount: String(Number(newItem.amount) - 1),
      };

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
      } else {
        console.log(res);
      }
    }
  };

  return (
    <div className="mt-5 min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">سبد خرید</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 gap-x-5">
        <div className="rounded-lg md:w-2/3">
          {myCart.length > 0 ? (
            myCart.map((item: cart) => {
              return (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-x-3 justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <Image
                    src={item.productImage}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                    width={500} height={500}
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.productTitle}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {" "}
                        سایز : {item.size}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={(event) => amountHandler(event, item)}
                          id="decrease"
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item.amount}
                          min="1"
                        />
                        <span
                          onClick={(event) => amountHandler(event, item)}
                          id="increase"
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">
                          {Number(Number(item.price) * Number(item.amount)).toLocaleString()}{" "}
                          تومان
                        </p>
                        <svg
                          onClick={() => removeFromCart(item)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex gap-x-3 justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <p>سبد خرید خالی است</p>
            </div>
          )}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">هزینه کل</p>
            <p className="text-gray-700">
              {tottalPrice.toLocaleString()} تومان
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">هزینه ارسال</p>
            <p className="text-gray-700">
              {deliveryPrice.toLocaleString()} تومان
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">جمع کل</p>
            <div className="">
              {myCart.length > 0 ? (
                <p className="mb-1 text-lg font-bold">
                  {(tottalPrice + deliveryPrice).toLocaleString()} تومان
                </p>
              ) : (
                <p className="mb-1 text-lg font-bold">
                  {(0).toLocaleString()} تومان
                </p>
              )}
            </div>
          </div>
          <button
            onClick={submitOrder}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            نهایی کردن خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

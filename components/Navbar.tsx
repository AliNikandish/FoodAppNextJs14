"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const Navbar = () => {
  const { myCart, isLoggedIn, setIsLoggedIn,setDetails }: any = useContext(CartContext);
  const router = useRouter();

  let Links = [
    { name: "صفحه اصلی", link: "/" },
    { name: "منو", link: "/menu" },
    { name: "درباره با ما", link: "/about-us" },
  ];
  let [open, setOpen] = useState(false);

  async function signOutHandler() {
    const res = await fetch("/api/sign-out");
    if (res.ok) {
      setIsLoggedIn(false);
      setDetails(null)
      Swal.fire({
        title: "موفق",
        text: "با موفقیت خارج شدید",
        icon: "success",
      });
      router.replace("/");
      router.refresh();
    }
  }
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <Link
          href={"/"}
          className="font-bold text-2xl cursor-pointer flex items-center justify-end text-gray-500 gap-x-2"
        >
          <span className="text-3xl text-red-600 mr-1 pt-2">
            <FaPizzaSlice />
          </span>
          فود
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
          {open ? <HiXMark /> : <IoIosMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 text-center"
            >
              <Link
                href={link.link}
                className="text-gray-500 hover:text-gray-200 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="md:ml-1 text-xl md:my-0 m-2 text-center ">
            {isLoggedIn ? (
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  type="button"
                  className="flex items-center gap-x-3  bg-gray-600 text-white p-2 py rounded  w-[350px] md:w-[100px]"
                  onClick={signOutHandler}
                >
                  <div className="flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                      />
                    </svg>

                    <p>خروج</p>
                  </div>
                </button>

                <Link
                  href={"/dashboard"}
                  className="flex items-center gap-x-3  bg-teal-600 text-white p-2 py rounded ml-2 w-[350px] md:w-[100px]"
                >
                  داشبورد
                </Link>
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="flex items-center gap-x-3 bg-gray-600 text-white p-2 py rounded w-[350px] md:w-[80px]"
              >
                <div className="flex gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>

                  <p>ورود</p>
                </div>
              </Link>
            )}
          </li>

          <li className="md:ml-8 text-xl md:my-0 m-2 text-center">
            <Link
              href={`/cart`}
              className="flex items-center gap-x-3 bg-red-600 text-white p-2 py rounded w-[350px] md:w-[150px]"
            >
              <div className="flex gap-x-1 items-center">
                <FaCartShopping />
                <span>سبد خرید</span>
                {myCart && myCart.length > 0 && myCart.length}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

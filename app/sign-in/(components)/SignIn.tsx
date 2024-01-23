"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";


const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const {setIsLoggedIn,setDetails}:any=useContext(CartContext)
  const router= useRouter()
  
  useEffect(() => {
    fetch("/api/getMe").then((res) => {
      if (res.status === 200) {
        router.replace("/dashboard");
      }
    });
  }, [router]);


  
  async function  submitHandler(){

    const res = await fetch(`/api/sign-in/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password
        }),
      });
      if (res.ok) {
        const response = await res.json();
        setIsLoggedIn(true)
        console.log(response.user);
        await setDetails(response.user)

        Swal.fire({
          title: "موفق",
          text: "با موفقیت وارد شدید.",
          icon: "success",
        });
        router.replace("/");

        
      } else {
        Swal.fire({
          title: "خطا",
          text: "خطایی هنگام ورود رخ داده است",
          icon: "error",
        });
        console.log(res);
      }

  }

  return (
    <div className="mt-24 flex flex-col min-h-[700px]">
      <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-xl border text-black w-full">
          <h1 className="mb-8 text-3xl text-center">ورود</h1>
          <input
            value={identifier}
            onChange={(e)=>setIdentifier(e.target.value)}
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="email"
            placeholder="ایمیل یا نام کاربری"
          />

          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="password"
            placeholder="رمز عبور"
          />

          <button
          onClick={submitHandler}
            type="button"
            className="w-full text-center py-3 rounded bg-green-800 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            ورود
          </button>
        </div>
        <div className=" my-8">
          <Link href='sign-up' className="text-red-500">اکانتی ندارید؟ برای ثبت نام کنید</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

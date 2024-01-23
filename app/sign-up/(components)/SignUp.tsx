"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddres] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router= useRouter()
  const {setIsLoggedIn}:any=useContext(CartContext)

  useEffect(() => {
    fetch("/api/getMe").then((res) => {
      if (res.status === 200) {
        router.replace("/dashboard");
      }
    });
  }, [router]);

  async function signUpHandler (){

    if(!name.trim()||!userName.trim()||!userName.trim()||!address.trim()||!email.trim()||!password.trim()){
      alert('لطفا تمامی فیلد ها را پر کنید.')
      return null
    }

	const res = await fetch(`/api/sign-up/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
			name,
			userName,
			address,
			email,
			password
        }),
      });
      if (res.ok) {
        const response = await res.json();
        setIsLoggedIn(true)
        Swal.fire({
          title: "موفق",
          text: "ثبت نام با موفقیت انجام شد.",
          icon: "success",
        });
        router.replace("/");
        
      } else {
        Swal.fire({
          title: "خطا",
          text: "در روند ثبت نام خطایی رخ داد",
          icon: "error",
        });
        console.log(res);
      }

  }

  return (
    <div className="container mx-auto mt-24">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow border">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('pic/headLine/photo-1613769049987-b31b641f25b1.avif') ",
            }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">ساخت اکانت جدید</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    نام
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    نام کاربری
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="نام کاربری"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  ایمیل
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  آدرس
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="آدرس"
                  value={address}
                  onChange={(e) => setAddres(e.target.value)}
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    پسوورد
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
				  onClick={signUpHandler}
                >
                  ثبت نام اکانت
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="sign-in"
                >
                  اکانت دارید؟ برای ورود کلیک کنید
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

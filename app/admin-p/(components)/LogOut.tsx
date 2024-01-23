"use client";

import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useContext } from "react";


const LogOut = () => {
  const { setIsLoggedIn,setDetails }: {setIsLoggedIn?:Dispatch<SetStateAction<boolean>>,setDetails?: Dispatch<SetStateAction<{}|null>>;} = useContext(CartContext);
  const router = useRouter();
  const logOutHandler = async () => {
    const res = await fetch("/api/sign-out");
    if (res.ok) {
      setIsLoggedIn!(false);
      setDetails!(null)
      router.replace("/");
    }
  };

  return (
    <button
      type="button"
      onClick={logOutHandler}
      className="flex gap-x-3 p-2 space-x-3 rounded-md"
    >
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

      <span>خروج</span>
    </button>
  );
};

export default LogOut;

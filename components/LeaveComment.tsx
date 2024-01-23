"use client";

import { CartContext } from "@/context/CartContext";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

type isLoggedIn = {
  isLoggedIn?: Boolean;
};


const LeaveComment = () => {
  const { isLoggedIn }: isLoggedIn = useContext(CartContext);
  const { details }: details = useContext(CartContext);
  const [vlaue, setValue] = useState("");
  const { id } = useParams();
  const router = useRouter();
  if (isLoggedIn) {
   
    const submitHandler = async () => {
      const res = await fetch(`/api/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: vlaue,
          authorEmail: details!.email,
        }),
      });

      const response = await res.json();

      if (res.ok) {
        setValue("");
        Swal.fire({
          title: "موفق",
          text: "نظر شما با موفقیت ثبت شد",
          icon: "success",
        });
        router.refresh();
      } else {
        Swal.fire({
          title: "خطا",
          text: "خطایی در روند ثبت نظر پیش آمده است.",
          icon: "error",
        });
        console.log(res);
      }
    };

    return (
      <div className="flex flex-col mx-auto max-w-[640px] mt-5 ">
        <label
          className="mb-2 font-bold text-lg text-gray-900"
          htmlFor="comment"
        >
          ثبت نظر:
        </label>
        <textarea
          rows={4}
          className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-lg"
          id="comment"
          name="comment"
          value={vlaue}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={submitHandler}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[100px]"
          >
            ارسال
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mx-auto max-w-[640px] mt-24 ">
        <p className="text-red-500">برای ثبت نظر باید ابتدا باید وارد شوید</p>
      </div>
    );
  }
};

export default LeaveComment;

"use client";

import SizeBox from "@/components/SizeBox";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

type category = {
    id: string
    image: string
    title: string
  };

  
  const AddNew = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("-1");
    const [imageUrl, setImageUrl] = useState("");
    const [publicId, setPublicId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [basePrice, setPriceBase] = useState("");
    const [sizes, setSizes] = useState<[]>([]);
  
  
    const router = useRouter();
  
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      fetch("/api/getMe")
        .then((res) => res.json())
        .then((data) => {
          if (data.user.role === "admin") {
            setIsAdmin(true);
          } else {
            router.replace("/");
          }
        });
    }, [router]);
  
    const handleImageUpload = (result: CldUploadWidgetResults) => {
      console.log("result: ", result);
      const info = result.info as object;
  
      if ("secure_url" in info && "public_id" in info) {
        const url = info.secure_url as string;
        const public_id = info.public_id as string;
        setImageUrl(url);
        setPublicId(public_id);
        console.log("url: ", url);
        console.log("public_id: ", public_id);
      }
    };
  
    const removeImage = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await fetch("/api/removeImage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicId }),
        });
  
        if (res.ok) {
          setImageUrl("");
          setPublicId("");
          Swal.fire({
            title: "موفق",
            text: "عکس مورد نظر با موفقیت حذف شد.",
            icon: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const sendProduct = async () => {
      if (selectedCategory === "-1") {
        alert("باید موضوع رو انتخاب کنید");
        return null;
      }
  
      if (!title.trim() || !description.trim() || !basePrice.trim()) {
        alert("لطفا تمامی فیلد ها رو پر کنید");
        return null;
      }
  
      if (!imageUrl.trim()) {
        alert("لطفا یک عکس برای محصول آپلود کنید");
        return null;
      }
  
      if (sizes.length <= 0) {
        alert("لطفا حداقل یک سایز برای محصول اضافه کنید");
        return null;
      }
  
      try {
        const res = await fetch("/api/product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageUrl,
            selectedCategory,
            title,
            description,
            basePrice,
            sizes,
          }),
        });
  
        if (res.ok) {
          Swal.fire({
            title: "موفق",
            text: "محصول جدید با موفقیت ساخته شد",
            icon: "success",
          });
  
          router.push("/admin-p");
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "خطا",
          text: "خطایی در ساخت محصول جدید به وجود آمده است.",
          icon: "error",
        });
      }
    };
  
    useEffect(() => {
      const getCategories = async () => {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories(data);
      };
      getCategories();
    }, []);
  
    return (
      <div className="mt-5 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded"
          placeholder="عنوان"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none rounded"
          placeholder="توضیحات محصول ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
  
        <div className="mt-5 buttons flex">
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded"
            placeholder="قیمت پایه"
            type="text"
            value={basePrice}
            onChange={(e) => setPriceBase(e.target.value)}
          />
        </div>
  
        <div className="mt-5 buttons flex flex-col gap-y-2">
          <p>اضافه کردن سایز:</p>
          <SizeBox sizes={sizes} setSizes={setSizes} />
        </div>
  
        <div className="mt-5 buttons flex gap-x-1">
          <p>انتخاب موضوع:</p>
          <select
            className="bg-gray-100 rounded"
            name="موضوعات"
            id=""
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="-1">یک گزینه رو انتخاب کنید</option>
            {categories.length > 0 &&
              categories.map((item: category) => {
                return (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                );
              })}
          </select>
        </div>
  
        <div className="mt-5 p-3 rounded flex flex-col mb-4 bg-gray-100 min-h-32">
          <div className="buttons flex">
            <p>آپلود عکس</p>
          </div>
  
          {imageUrl && (
            <div className="flex flex-col gap-y-2">
              <p>پیش نمایش عکس</p>
              <Image width={500} height={500} src={imageUrl} alt=""></Image>
            </div>
          )}
  
          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            onUpload={handleImageUpload}
            className="mt-5"
          >
            <input type="file" />
          </CldUploadButton>
  
          {publicId && (
            <button
              onClick={removeImage}
              className="mt-4 py-1 px-2 rounded-md font-bold w-fit bg-red-600 text-white mb-4"
            >
              حذف عکس
            </button>
          )}
        </div>
  
        <div className="mt-5 buttons flex">
          <Link
            href="/admin-p"
            className=" rounded btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
          >
            لغو
          </Link>
          <div
            onClick={sendProduct}
            className="rounded btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500"
          >
            ارسال
          </div>
        </div>
      </div>
    );
  };
  
  export default AddNew;
  
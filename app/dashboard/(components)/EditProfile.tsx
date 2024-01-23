"use client"

import { CartContext } from "@/context/CartContext";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { details }: any = useContext(CartContext);
  const [Addres, setAddres] = useState('');
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState<any>('');
  const [image,setImage]=useState('')
  const router=useRouter()

  useEffect(()=>{
    if(details){
      setAddres(details.Addres)
      setEmail(details.email)
      setName(details.name)
      setUserName(details.userName)
      setImage(details.image)
    }
  },[details])


  const updateProfile=async()=>{
    try {
      const res = await fetch('/api/users', {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Addres,
          name,
          imageProfile: imageUrl ? imageUrl : image
        }),
      })

      if(res.ok){

        Swal.fire({
          title: "موفق",
          text: "پروفایل شما با موفقیت آپدیت شد",
          icon: "success",
        });
        router.refresh()
      }
      
    } catch (error) {
      
    }
  }
  

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

  return (
    <div className="mt-20 mb-5 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <div className="mt-5 buttons flex items-center gap-x-2">
      <label htmlFor="">ایمیل</label>
      <input
        className="title bg-gray-300 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="ایمیل"
        type="email"
        value={email}
        readOnly
      />
    </div>


    <div className="mt-5 buttons flex items-center gap-x-2">
    <label htmlFor="">آدرس</label>
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="آدرس"
        type="text"
        value={Addres}
        onChange={(e) => setAddres(e.target.value)}
      />
    </div>

    <div className="mt-5 buttons flex items-center gap-x-2">
    <label htmlFor="">نام و نام خانوادگی</label>
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="نام"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="mt-5 buttons flex items-center gap-x-2">
      <label htmlFor="">نام کاربری</label>
      <input
        className="title bg-gray-300 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="نام کاربری"
        type="text"
        value={userName}
        readOnly
      />
    </div>
  

      <div className="flex items-center gap-x-3">
        <p>عکس پروفایل</p>
      {imageUrl?<Image width={100} height={100} alt="profile" src={imageUrl}/> :image ? <Image width={100} height={100} alt="profile" src={image}/> :<Image width={100} height={100} alt="profile" src="/pic/avatar.png"/>}
      </div>

    <div className="flex gap-x-3 mb-4">
      <div className="mt-5 buttons flex">
        <p>آپلود عکس</p>
      </div>


      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={handleImageUpload}
        className="mt-5"
      >
        <input type="file" />
      </CldUploadButton>

      
    </div>

    <div className="mt-5 buttons flex">
    <Link
            href="/dashboard"
            className=" rounded btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
          >
            لغو
          </Link>
      <div
        onClick={updateProfile}
        className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
      >
        ارسال
      </div>
    </div>
  </div>
  )
}

export default EditProfile
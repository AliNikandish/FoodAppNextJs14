"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MainContent from "./MainContent";
 


const AdminHomePage = () => {

const router = useRouter()
const [isAdmin,setIsAdmin]=useState(false)
useEffect(() => {
  fetch("/api/getMe").
  then((res) => res.json())
  .then(data=>{
    if(data.user.role==='admin'){
      setIsAdmin(true)
    }else{
      router.replace('/')
    }
  }
  )
}, [router]);


if(isAdmin){
    return <MainContent></MainContent>;

}else{
  return <p>شما به این صفحه دسترسی ندارید</p>
}
};

export default AdminHomePage;

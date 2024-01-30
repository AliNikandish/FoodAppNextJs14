import React from 'react'
import SignUp from './(components)/SignUp'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "ثبت نام - فود",
  description: "ثبت نام در فود",
};

const page = () => {
  return (
    <SignUp/>
  )
}

export default page
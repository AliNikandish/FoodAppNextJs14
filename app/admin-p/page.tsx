import React from 'react'
import AdminHomePage from './(components)/AdminHomePage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ادمین پنل - فود",
};

const page = () => {
  return (
    <AdminHomePage/>
  )
}

export default page
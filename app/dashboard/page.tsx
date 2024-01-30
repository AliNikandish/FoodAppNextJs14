import React from 'react'
import DashboardPage from './(components)/DashboardPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "داشبورد- فود",
};
const page = () => {
  return (
    <DashboardPage/>
  )
}

export default page
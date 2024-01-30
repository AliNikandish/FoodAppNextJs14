import React from 'react'
import SignIn from './(components)/SignIn'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: " ورود - فود",
  description: "ورود به فود",
};
const page = () => {
  return (
    <SignIn/>
  )
}

export default page
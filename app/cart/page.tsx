import { Metadata } from 'next';
import Cart from './(components)/Cart'

export const metadata: Metadata = {
  title: " سبد خرید - فود",
};

const page = () => {
  return (
   <Cart/>
  )
}

export default page
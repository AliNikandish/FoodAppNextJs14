import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="bg-gray-900">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <Link href="/about-us" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    درباره ما
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/cart" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    سبد خرید
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/menu" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    منو
                </Link>
            </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400" dir='ltr'>
            © 2024 Food,All rights reserved.
        </p>
    </div>
</section>
  )
}

export default Footer
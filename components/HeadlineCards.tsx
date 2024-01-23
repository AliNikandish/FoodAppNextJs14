import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>بهترین صبحانه ها</p>
          <p className='px-2'>صبحانه خوشمزه</p>
          <Link href={`/menu/صبحانه`} className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>همین حالا سفارش بدید</Link>
        </div>
        <Image
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/pic/headLine/photo-1613769049987-b31b641f25b1.avif'
          alt='/'
          width={200}
          height={160}
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>بهترین غذاهای ایرانی</p>
          <p className='px-2'>با مواد تازه</p>
          <Link href={`/menu/غذاهای ایرانی`} className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>همین حالا سفارش بدید</Link>
        </div>
        <Image
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/pic/headLine/photo-1544025162-d76694265947.avif'
          alt='/'
          width={200}
          height={160}
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>بهترین دسر ها</p>
          <p className='px-2'>دسر های خوشمزه</p>
          <Link href={`/menu/دسر`} className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>همین حالا سفارش بدید</Link>
        </div>
        <Image
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/pic/headLine/photo-1559715745-e1b33a271c8f.avif'
          alt='/'
          width={200}
          height={160}
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
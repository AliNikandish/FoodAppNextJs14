"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const Slider = ({ component, type }: { component: any; type: string }) => {  
  if (type === "category") {
    return (
      <Swiper
        // slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {component.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <Link href={`/menu/${item.title}`}>
                <div
                  key={item.id}
                  className="flex flex-col justify-between items-center"
                >
                  <Image alt="" src={`${item.image}`} className="w-20" width={80} height={80} />
                  <h2 className="sm:text-xl">{item.title}</h2>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  if (type === "lastprodunct") {
    return (
      <Swiper
        // slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {component.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <Link href={`/product/${item.id}`}>
                <div
                  key={item.id}
                  className="border shadow-lg rounded-lg hover:scale-105 duration-300"
                >
                  <Image
                    alt=""
                    src={item.image}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                    width={200} height={300}
                  />
                  <div className="flex flex-col lg:flex-row justify-between px-2 py-4 gap-3">
                    <p className="font-bold">{item.title}</p>
                    <p>
                      <span className="bg-orange-500 text-white p-1 rounded-full">
                        قیمت از {Number(item.BasePrice).toLocaleString()} تومان
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  if (type === "lastcomments") {
    return (
      <Swiper
        // slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {component.map((comment: any) => {
          return (
            <SwiperSlide key={comment.id}>
              <blockquote
                key={comment.id}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="Man"
                      src={
                        comment.authorImage
                          ? comment.authorImage
                          : "/pic/avatar.png"
                      }
                      className="h-32 w-32 rounded-full object-cover"
                      width={128}
                      height={128}
                    />
                    <p>{comment.authorName}</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <p className="mt-0.5  font-medium text-gray-900">
                      نوشته شده برای{" "}
                      <span className="font-VazirBold text-lg ">
                        {comment.productName}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{comment.content}</p>
              </blockquote>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
};

export default Slider;

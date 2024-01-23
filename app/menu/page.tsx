import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-16 max-w-[1640px] mx-auto p-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        لیست منو
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">

        <Link href="/menu/پیتزا" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/menu/Pepperoni-pizza-850x630-1.png"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              پیتزا
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع پیتزا
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/برگر" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/menu/Smashburger-recipe-120219.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              برگر
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع برگر
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/مرغ" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/menu/1200-Rotisserie-Chicken-SpendWithPennies-11-1024x1536.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              مرغ
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع غذا بر پایه مرغ
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/گوشت" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/menu/Beef-loin.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              گوشت قرمز
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع غذا بر پایه گوشت قرمز

            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/دسر" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/Easy-Fruit-Pizza-SpendWithPennies-8-1024x1536.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              دسر
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع غذا دسر
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/سالاد و سبزیجات" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/Easy-Watermelon-Salad-SpendWithPennies-3.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              سالاد
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع سالاد
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/غذاهای ایرانی" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/Koobideh-Square.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              ایرانی
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع غذای ایرانی
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/صبحانه" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/Fried-Egg-blog-2.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              صبحانه
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع صبحانه ایرانی و خارجی
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/نوشیدنی" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/orange-juice-apple-cider-vinegar-honey-recipe-clavzz7uu001z551b961w6b6a.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              نوشیدنی
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع نوشیدنی
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/غذاهای خارجی" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/Maki-zushi.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              خارجی
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع غذای خارجی
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/menu/لبنیات" className="group relative block bg-black h-80 rounded">
          <Image
          width={500} height={500}
            alt="Developer"
            src="/pic/Menu/ams-june-natl-dairy-month-blog-060223.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              لبنیات
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              انواع لبنیات 
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default page;

//
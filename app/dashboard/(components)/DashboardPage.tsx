"use client";

import { CartContext } from "@/context/CartContext";
import { FormatTime } from "@/utils/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

type order = {
  createdAt: string;
  id: string;
  tottalPrice: string;
  updatedAt: string;
  userID: string;
  cart:cart[] ;
};

type cart = {
  amount: string
  price: string
  productCategory: string
  productId: string
  productImage: string
  productTitle: string
  size: string
};
const DashboardPage = () => {
  const { details }: any = useContext(CartContext);
  const [orders, setOrdes] = useState<order[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getOrders() {
      try {
        if (details.id) {
          const res = await fetch(`/api/order/${details.id}`);
          const data = await res.json();
          setOrdes(data);
        } else {
          router.replace("/sign-in");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, [details?.id,router]);

  return (
    <div className="mt-12 container mx-auto px-4 sm:px-8 min-h-screen">
      <div className="py-8 mt-5">
        <h3 className="text-xl">
          خوش آمدی <span className="text-red-500">{details?.name}</span>
        </h3>

        <div className="mt-5 bg-gray-700 max-w-2xl shadow overflow-hidden sm:rounded-lg ">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-200">
              اطلاعات شما
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-300">
              جزئیات حساب کاربری
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-200">اسم شما</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                  {details?.name}
                </dd>
              </div>
              <div className="bg-gray-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-200">ایمیل شما</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                  {details?.email}
                </dd>
              </div>
              <div className="bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-200">
                  نام کاربری شما
                </dt>
                <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                  {details?.userName}
                </dd>
              </div>
              <div className="bg-gray-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-200">
                  تاریخ ساخت حساب کاربری
                </dt>
                <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                  {FormatTime(details?.createdAt)}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-3">
          <Link
            className="bg-gray-700 text-white rounded p-1"
            href="dashboard/edit-profile"
          >
            ویرایش پروفایل
          </Link>
        </div>
        <h3 className="mt-5 ">آخرین سفارش های شما</h3>

        {orders.length > 0 ? (
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-right text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      ردیف
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-right text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      جزئیات
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-right text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      قیمت کل
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-right text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      تاریخ سفارش
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 &&
                    orders.map((order: order, index: number) => {
                      return (
                        <tr key={order.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-gray-500 text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-300 whitespace-no-wrap">
                                  {index + 1}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-gray-500 text-sm">
                            <div className="text-gray-300 whitespace-no-wrap">
                              {order.cart.map((item: cart) => {
                                return (
                                  <div key={`${item.productId}-${item.size}`}>
                                    {item.productTitle}-{item.size}-
                                    {item.amount} عدد
                                  </div>
                                );
                              })}
                            </div>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-gray-500 text-sm">
                            <p className="text-gray-300 whitespace-no-wrap">
                              {Number(order.tottalPrice).toLocaleString()} تومان
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-gray-500 text-sm">
                            <p className="text-gray-300 whitespace-no-wrap">
                              {FormatTime(order.createdAt)}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>سفارشی وجود ندارد</div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

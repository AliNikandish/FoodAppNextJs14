import { FormatTime } from "@/utils/helpers";

const getOrders=async ()=>{
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/order`, {
          cache: "no-store",
        });
    
        if (res.ok) {
          const orders = await res.json();          
          return orders;
        }
      } catch (error) {
        console.log(error);
      }
    
      return null;
}

type cartOrder={
  size:string;
  productId: string;
  productTitle: string;
  productImage: string;
  productCategory: string;
  price: string;
  amount: string;
}

type order={
  cart: cartOrder[],
  id: string
  userID: string
  tottalPrice: string
  createdAt: string
  updatedAt: string
}

const page = async () => {
    const orders = await getOrders();        
    if (orders) {
  return (
    <table className="w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ردیف
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    id کاربر 
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    سبد خرید
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    قیمت کل
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    تاریخ ثبت سفارش
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item:order,index:string)=>{
                  return <tr key={item.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{index+1}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item.userID}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="text-gray-900 whitespace-no-wrap">
                    {item.cart.map((itemCart:cartOrder,index:number)=>{
                        return <p key={`${index} - ${itemCart.productTitle} - ${itemCart.size}`}>{itemCart.productTitle}-با سایز{itemCart.size}-{itemCart.amount} عدد</p>
                    })}
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {Number(item.tottalPrice).toLocaleString()} تومان
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {FormatTime(item.createdAt)}
                    </p>
                  </td>
                </tr>
                })}
              </tbody>
            </table>
  )
            }else{
                return <div>سفارشی وجود ندارد</div>
            }
}

export default page
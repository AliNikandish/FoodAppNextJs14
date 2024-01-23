import { FormatTime } from '@/utils/helpers';

 const getComments=async ()=>{
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/comments`, {
          cache: "no-store",
        });
    
        if (res.ok) {
          const comments = await res.json();
          return comments;
        }
      } catch (error) {
        console.log(error);
      }
    
      return null;
}

type comment={
  id: string;
  content: string;
  authorEmail: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  authorName: string;
  authorImage: string|null;
  productName: string;
}
const page = async () => {
    const comments = await getComments();    
    if (comments) {
  return (
    <table className="w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ردیف
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ایمیل کاربر 
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    id محصول
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    محتوا
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    تاریخ ثبت نظر
                  </th>
                </tr>
              </thead>
              <tbody>
                {comments.map((item:comment,index:number)=>{
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
                      {item.authorEmail}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {item.productId}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                    {item.content}
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
                return <div>کامنتی وجود ندارد</div>
            }
}

export default page
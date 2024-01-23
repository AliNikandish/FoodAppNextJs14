import { FormatTime } from "@/utils/helpers";

 const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
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
};

type user = {
  Cart: [];
  id: string;
  name: string;
  email: string;
  userName: string;
  Addres: string;
  image: string | null;
  createdAt: string;
  role: string;
  password: string;
};

const page = async () => {
  const users = await getUsers();

  if (users) {
    return (
      <table className="w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ردیف
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              نام کاربر
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ایمیل کاربر
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              آدرس کاربر
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              نقش
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              تاریخ ثبت نام
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item: user, index: number) => {
            return (
              <tr key={item.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.Addres}
                  </p>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {item.role}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                  {FormatTime(item.createdAt)}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <div>کامنتی وجود ندارد</div>;
  }
};

export default page;

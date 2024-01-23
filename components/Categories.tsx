import Slider from "./Slider";


export const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/category`, {
      cache: "no-store",
    });

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
const Categories = async () => {
  const categories = await getCategories();
  
  if (categories) {
    return (
      <div className="max-w-[1640px] mx-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">
          چه نوع خوراکی میخوای؟
        </h1>
        <Slider component={categories} type="category"/>
      </div>
    );
  }
};

export default Categories;

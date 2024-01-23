import React from "react";
import Slider from "./Slider";

export const getComments = async () => {
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
};

const Testimonial = async () => {
  const comments = await getComments();
  if (comments) {
    return (
      <>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">
              آخرین نظرات ثبت شده
            </h2>
            <Slider component={comments} type="lastcomments"/>
          </div>
        </section>
      </>
    );
  }
};

export default Testimonial;

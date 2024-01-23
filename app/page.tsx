import Best from "@/components/Last";
import Categories from "@/components/Categories";
import HeadlineCards from "@/components/HeadlineCards";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="container mt-20 min-h-screen mx-auto">
      <Hero/>
      <HeadlineCards/>
      <Categories/>
      <Best/>
      <Testimonial/>
    </div>
  )
}

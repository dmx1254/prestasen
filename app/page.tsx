import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <main className="h-full w-full font-mulish">
      <Hero />
      <div className="flex flex-col mx-4">
      <Categories />
      <Providers />
      </div>
      <Footer />
    </main>
  );
}

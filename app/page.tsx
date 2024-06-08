import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <main className="h-full p-4">
      <Hero />
      <Categories />
      <Popular />
    </main>
  );
}

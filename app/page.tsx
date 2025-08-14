import Features from "@/src/features/homepage/Features";
import Hero from "@/src/features/homepage/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <Hero />
      <Features />
    </main>
  );
}

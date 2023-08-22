"use client";
import Navbar from "./components/Navbar";
import Hero from "./container/Hero";
import Trending from "./container/Trending";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <Navbar />
      <Hero />
      <Trending />
    </main>
  );
}

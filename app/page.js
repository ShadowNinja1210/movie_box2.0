"use client";
import Navbar from "./components/Navbar";
import Hero from "./container/Hero";
import Carousel from "./components/Carousel";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <Navbar />
      <Hero />
      <Carousel arr={arr} title="Trending" />
      <Carousel arr={arr} title="Top rated Movies" />
    </main>
  );
}

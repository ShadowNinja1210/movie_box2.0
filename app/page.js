"use client";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./container/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <Navbar />
      <Hero />
      <Card imgUrl="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
    </main>
  );
}

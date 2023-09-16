"use client";
import Card from "./Card";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Carousel = ({ arr, title }) => {
  const [opacity, setOpacity] = useState(1);
  const handleScroll = (e) => {
    if (e.target.scrollLeft < 30) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  };

  return (
    <div className="w-4/5 mx-auto py-10 flex flex-col">
      <div className="flex gap-3 justify-between items-bottom font-semibold text-2xl text-gray-800 pb-4 px-8">
        <p>{title}</p>
        <a
          href="/"
          className="text-cyan-600 text-base font-bold border-2 border-cyan-600 rounded-full py-1 px-4 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 focus:text-white focus:bg-cyan-500 focus:border-cyan-500"
        >
          <span className="">View all</span> <BsArrowRight className="inline-block" />
        </a>
      </div>
      <div style={{ "--opacity": opacity }} className="carousel relative py-2">
        <div className="flex overflow-x-auto gap-4" onScroll={handleScroll}>
          {arr.map((item, index) => (
            <Card
              key={index}
              imgUrl="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              padding={index === 0 ? "ml-8" : index === arr.length - 1 ? "mr-8" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

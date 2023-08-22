import { BiSearchAlt2 } from "react-icons/bi";
import "./container.css";

const Hero = () => {
  return (
    <div className="w-4/5 mx-auto h-72 relative overflow-hidden">
      {/* Image & Gradient Background */}
      <img src="https://www.themoviedb.org/t/p/original/kxDCq0RbHwVzVHUkxDi67Xilrrx.jpg" className="absolute top-0 z-1 w-full object-cover image" />
      <div className="absolute top-0 z-0 w-full h-72 overflow-hidden opacity-80 gradient"></div>

      {/* Text */}
      <div className="px-10 py-14 text-gray-200 text-left">
        <h1 className="text-5xl font-bold pb-2 ">Welcome.</h1>
        <h2 className="text-3xl font-semibold ">
          To <span className="font-bold">MovieInfo</span> - Encyclopedia for so many Movies & TV Shows. Try it now.
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Type the movie in your mind here..."
          id="default-input"
          className="z-10 mx-auto bg-gray-200 font-medium text-gray-900 text-sm rounded-full focus:ring-2 focus:ring-cyan-600 focus:border-cyan-800 block w-full p-3"
        />
        <button className="search absolute flex top-0 py-2.5 px-9 text-md font-medium text-gray-100 rounded-full justify-end items-center gap-2">
          Search <BiSearchAlt2 className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { BiSearch } from "react-icons/bi";
import "./container.css";

const Hero = () => {
  return (
    <div className="w-4/5 mx-auto h-72 relative overflow-hidden">
      {/* Image & Gradient Background */}
      <img src="https://www.themoviedb.org/t/p/original/kxDCq0RbHwVzVHUkxDi67Xilrrx.jpg" className="absolute top-0 z-1 w-full object-cover image" style={{}} />
      <div className="absolute top-0 z-0 w-full h-72 overflow-hidden opacity-80 gradient" style={{}}></div>

      {/* Text */}
      <div className="px-10 py-14 text-gray-200 text-left">
        <h1 className="text-5xl font-bold pb-2 ">Welcome.</h1>
        <h2 className="text-3xl font-semibold ">
          To <span className="font-bold">MovieInfo</span> - Encyclopedia for so many Movies & TV Shows. Try it now.
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Type the movie in your mind here..."
          id="default-input"
          className="z-10 mx-auto bg-gray-200 font-medium text-gray-900 text-sm rounded-full focus:ring-4 focus:ring-cyan-600 focus:border-cyan-800 block w-11/12 p-3"
        />
        <button className="absolute flex  right-0 top-0">
          Search <BiSearch />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/MovieInfo-LOGO_C.svg";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-950">
      <div className="w-9/12 flex flex-wrap items-center justify-between space-between mx-auto py-4">
        <a href="/" className="flex items-center">
          <div className="bg-white">
            <Image src={logo} width={130} height={130} />
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a href="/" className=" font-semibold block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-cyan-300 md:p-0">
                Home
              </a>
            </li>
            <li>
              <p className="cursor-pointer font-semibold block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-cyan-300 md:p-0">Movies</p>
            </li>
            <li>
              <p className="cursor-pointer font-semibold block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-cyan-300 md:p-0 ">TV Shows</p>
            </li>
            <li>
              <p className="cursor-pointer font-semibold block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-cyan-300 md:p-0 ">Login</p>
            </li>
            <li>
              <p className="cursor-pointer font-semibold block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:hover:text-cyan-300 md:p-0 ">
                <FaPlus className="inline-block" />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

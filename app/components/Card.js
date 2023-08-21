import { PiDotsThreeCircleFill } from "react-icons/pi";
import { AiOutlineStar, AiFillStar, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import "./components.css";

const Card = ({ title, date, id, genre, score, imgUrl }) => {
  const [openToggle, setOpenToggle] = useState(false);
  const [bookMarked, setBookMarked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const divRef = useRef(null);
  const blur = {
    filter: "blur(8px)",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpenToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-40 rounded-md relative overflow-hidden ">
      {/* Top Part */}
      <div className=" relative overflow-hidden w-40 max-h-53 rounded-md cursor-pointer">
        {/* Poster Image */}
        <img src={imgUrl} alt="image" className="object-cover h-54 w-40" />

        {/* Score */}
        <div className="score absolute bottom-2 right-2 flex rounded-full bg-gray-200 w-9 h-9 p-1 pt-1.5 font-bold text-sm text-center justify-center items-center">
          82<sup>%</sup>
        </div>
      </div>
      {/* Menu Options */}
      {!openToggle ? (
        <button className="absolute top-2 right-2" style={openToggle ? blur : undefined} onClick={() => setOpenToggle(true)}>
          <PiDotsThreeCircleFill className="fill-gray-200 text-2xl opacity-70 hover:fill-cyan-500 focus:fill-cyan-500" />
        </button>
      ) : (
        <div ref={divRef} className="absolute font-semibold top-8 right-2 bg-gray-200 rounded-sm flex flex-col gap-1 p-2">
          {/* Favorite */}
          <div>
            <button className="flex gap-1" onClick={() => setFavorite(!favorite)}>
              {favorite ? <AiFillStar /> : <AiOutlineStar />} <p className="text-xs">Favorite</p>
            </button>
            <hr className="border border-gray-300 my-2" />
          </div>
          {/* Add to list */}
          <div>
            <button className="flex gap-1">
              <AiOutlinePlusCircle /> <p className="text-xs ">Add to list</p>
            </button>
            <hr className="border border-gray-300 my-2" />
          </div>
          {/* Watchlist */}
          <button className="flex gap-1" onClick={() => setBookMarked(!bookMarked)}>
            {bookMarked ? <BsFillBookmarkCheckFill /> : <BsBookmarkPlus />}
            <p className="text-xs">Watchlist</p>
          </button>
        </div>
      )}

      {/* Title & Date */}
      <div className="px-2 py-2" style={{ lineHeight: 1.3, fontSize: "0.95rem" }}>
        <a href="/" className="font-bold hover:text-cyan-500">
          Spider-Man: Across the Spider-Verse
        </a>
        <p className="font-medium text-sm text-gray-500 mt-1">12 June 2022</p>
      </div>

      {/* Genres */}
      <div className="px-2 pt-1 pb-2">
        <a href="/" className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
          Action
        </a>
        <a href="/" className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
          Comedy
        </a>
        <a href="/" className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
          Romantic
        </a>
      </div>
    </div>
  );
};

export default Card;

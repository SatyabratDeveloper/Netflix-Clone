import { useRef, useState } from "react";
import { TmdbGenre } from "../../constants/constants";
import { FaPlay } from "react-icons/fa";
import { GoPlus, GoDotFill } from "react-icons/go";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

const MediaCard = ({ media }) => {
  const [delayedHover, setDelayedHover] = useState(false);
  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setDelayedHover(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setDelayedHover(false);
  };

  const genreNames = media.genre_ids.map((id) => TmdbGenre[id]).filter(Boolean);

  const formattedReleaseDate = new Date(
    media.release_date || media.first_air_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-w-48 mr-3 hover:cursor-pointer"
    >
      {/* Poster image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
        alt="poster"
        className="rounded-md w-full object-cover"
      />

      {/* Hover card with smooth transition */}
      <div
        className={`absolute top-0 left-0 z-50 w-72 origin-left transition-all duration-300 ease-out ${
          delayedHover
            ? "opacity-100 scale-150"
            : "opacity-0 scale-100 pointer-events-none"
        }`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
          alt="backdrop"
          className="rounded-t-md"
        />
        <div className="bg-zinc-900 text-white py-2 px-4 rounded-b-md">
          <h3 className="text-base font-semibold">
            {media.title || media.name || "Untitled"}
          </h3>

          <div className="flex gap-3 text-gray-300 mt-1 text-xs items-center">
            <span>{formattedReleaseDate}</span>
            <span className="border border-gray-400 rounded-sm px-1 text-[8px]">
              HD
            </span>
          </div>

          <div className="flex justify-between my-2 text-gray-300">
            <div className="flex gap-1.5">
              <button className="border border-gray-400 rounded-full h-9 w-9 hover:border-white hover:bg-zinc-700 transition">
                <FaPlay className="text-xs place-self-center" />
              </button>
              <button className="border border-gray-400 rounded-full h-9 w-9 hover:border-white hover:bg-zinc-700 transition">
                <GoPlus className="text-xl place-self-center" />
              </button>
              <button className="border border-gray-400 rounded-full h-9 w-9 hover:border-white hover:bg-zinc-700 transition">
                <BsHandThumbsUp className="place-self-center" />
              </button>
            </div>
            <button className="border border-gray-400 rounded-full h-9 w-9 hover:border-white hover:bg-zinc-700 transition">
              <FaAngleDown className="place-self-center" />
            </button>
          </div>

          <div className="flex items-center flex-wrap text-xs text-gray-300">
            {genreNames.map((name, index) => (
              <span key={index} className="flex items-center">
                {name}
                {genreNames.length !== index + 1 && (
                  <GoDotFill className="mx-1.5 text-[7px] text-gray-600" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;

import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const CategoryList = ({ mediaList }) => {
  const [selected, setSelected] = useState(null);

  const isItemSelected = (id) => selected === id;

  const handleClick = (id) => (ctx) => {
    setSelected(ctx ? id : null);
  };

  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {mediaList.map((mediaInfo) => (
          <div key={mediaInfo.id} className="mx-2">
            <Card
              mediaInfo={mediaInfo}
              onClick={handleClick(mediaInfo.id)}
              selected={isItemSelected(mediaInfo.id)}
              src={`https://image.tmdb.org/t/p/w500${mediaInfo["poster_path"]}`}
            />
          </div>
        ))}
      </ScrollMenu>
    </>
  );
};

const LeftArrow = () => {
  const visibility = useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);

  return (
    <div className={`relative ${isFirstItemVisible ? "hidden" : ""}`}>
      <button
        onClick={() => visibility.scrollPrev()}
        className="group h-full px-3 absolute left-0 text-gray-300 hover:text-white bg-black opacity-50
        hover:opacity-60 hover:transition z-10"
      >
        <MdOutlineChevronLeft className="text-6xl transform transition-transform duration-200 group-hover:scale-125" />
      </button>
    </div>
  );
};

const RightArrow = () => {
  const visibility = useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);

  return (
    <div
      className={`relative ${
        isLastItemVisible ? "hidden transition ease-in-out" : ""
      }`}
    >
      <button
        onClick={() => visibility.scrollNext()}
        className="group h-full px-3 absolute right-0 text-gray-300 hover:text-white bg-black opacity-50
        hover:opacity-60 hover:transition z-10"
      >
        <MdOutlineChevronRight className="text-6xl transform transition-transform duration-200 group-hover:scale-125" />
      </button>
    </div>
  );
};

function Card({ onClick, selected, mediaInfo, src }) {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      className="w-48 cursor-pointer"
      tabIndex={0}
    >
      <img src={src} className="" />
      <div>Selected: {JSON.stringify(selected)}</div>
    </div>
  );
}

export default CategoryList;

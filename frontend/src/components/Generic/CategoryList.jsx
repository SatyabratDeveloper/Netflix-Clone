import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { MediaCard } from "..";

const CategoryList = ({ mediaList }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [isAtStart, setIsAtStart] = useState(true);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const scrollBy = 7; // Number of cards to scroll
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() - scrollBy);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const scrollBy = 7; // Number of cards to scroll
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() + scrollBy);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIsAtStart(!emblaApi.canScrollPrev());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative h-full">
      {!isAtStart && (
        <button
          onClick={scrollPrev}
          className="absolute top-0 left-[-4rem] group h-full w-24 text-6xl text-gray-400 hover:text-gray-100
          bg-black bg-opacity-60 hover:bg-opacity-75 transition z-10"
        >
          <MdOutlineChevronLeft className="place-self-center group-hover:scale-125 transition" />
        </button>
      )}

      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {mediaList.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="absolute top-0 right-0 group h-full w-24 text-6xl text-gray-400 hover:text-gray-100
        bg-black bg-opacity-60 hover:bg-opacity-75 transition"
      >
        <MdOutlineChevronRight className="place-self-center group-hover:scale-125 transition" />
      </button>
    </div>
  );
};

export default CategoryList;

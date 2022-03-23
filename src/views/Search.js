import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import CategoryItem from "components/CategoryItem";
import Title from "components/Title";
import WideCategoryItem from "components/WideCategoryItem";
import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Search = () => {
  const favoritesRef = useRef();

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  useEffect(() => {
    if (favoritesRef.current) {
      const handleScroll = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ==
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };
      handleScroll();
      favoritesRef.current.addEventListener("scroll", handleScroll);
      return () => {
        favoritesRef?.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [favoritesRef]);
  return (
    <>
      <section className="mb-8">
        <Title title="En çok dinlediğin türler" />
        <div className="relative">
          {prev && (
            <button
              className="w-12 h-12 bg-white rounded-full text-black flex items-center justify-center absolute -left-6 top-1/2 z-10 -translate-y-1/2 hover:scale-[1.06]"
              onClick={slideFavoritesPrev}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}
          {next && (
            <button
              className="w-12 h-12 bg-white rounded-full text-black flex items-center justify-center absolute -right-6 top-1/2 z-10 -translate-y-1/2 hover:scale-[1.06]"
              onClick={slideFavoritesNext}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          )}
          <ScrollContainer
            className="flex overflow-x-auto gap-x-6 scrollable"
            innerRef={favoritesRef}
          >
            {favoriteCategories.map((category, index) => (
              <WideCategoryItem category={category} key={index} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryItem category={category} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;

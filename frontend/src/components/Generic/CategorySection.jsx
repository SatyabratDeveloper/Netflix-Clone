import { CategoryHead, CategoryList } from "..";

const CategorySection = ({ mediaInfo, list }) => {
  return (
    <>
      <CategoryHead mediaInfo={mediaInfo} />
      <CategoryList mediaList={list} />
    </>
  );
};

export default CategorySection;

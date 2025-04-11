import { CategoryHead, CategoryList } from "..";

const CategorySection = ({ mediaInfo, list }) => {
  return (
    <div className="ml-16">
      <CategoryHead mediaInfo={mediaInfo} />
      <CategoryList mediaList={list} />
    </div>
  );
};

export default CategorySection;

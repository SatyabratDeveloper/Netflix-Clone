import formatCategoryName from "../../utils/formatCategoryName";
import { FaAngleRight } from "react-icons/fa";

const CategoryHead = ({ mediaInfo }) => {
  const categoryName = formatCategoryName(mediaInfo);

  return (
    <div className="inline-flex gap-5 items-baseline my-3 mt-16 group hover:cursor-pointer">
      <div className="text-[1.7rem] font-semibold">{categoryName}</div>
      <span className="hidden group-hover:flex items-center text-cyan-500 font-semibold ">
        Explore All <FaAngleRight size={20} />
      </span>
    </div>
  );
};

export default CategoryHead;

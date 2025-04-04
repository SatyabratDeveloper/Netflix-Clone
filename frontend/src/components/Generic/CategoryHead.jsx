import formatCategoryName from "../../utils/formatCategoryName";
import { FaAngleRight } from "react-icons/fa";

const CategoryHead = ({ mediaInfo }) => {
  const categoryName = formatCategoryName(mediaInfo);

  return (
    <div className="flex gap-5 items-baseline">
      <div className="text-[1.7rem] font-semibold">{categoryName}</div>
      <span className="flex items-center hover:text-cyan-500 font-semibold hover:cursor-pointer">
        Explore All <FaAngleRight size={20} />
      </span>
    </div>
  );
};

export default CategoryHead;

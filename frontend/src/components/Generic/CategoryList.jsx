import { VideoCard } from "..";

const CategoryList = ({ mediaList }) => {
  console.log(mediaList);
  return (
    <div className="flex flex-wrap gap-2 h-60 border">
      {mediaList.map((mediaInfo) => (
        <VideoCard key={mediaInfo.id} mediaInfo={mediaInfo} />
      ))}
    </div>
  );
};

export default CategoryList;

const VideoCard = ({ mediaInfo }) => {
  console.log(mediaInfo);
  return (
    <div className="border w-44">
      <img src={`https://image.tmdb.org/t/p/w500${mediaInfo["poster_path"]}`} />
    </div>
  );
};

export default VideoCard;

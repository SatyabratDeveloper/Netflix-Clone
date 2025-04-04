const formatFilterName = (filterType) => {
  return filterType
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatCategoryName = (mediaInfo) => {
  const { filterType, mediaBrowser, mediaType } = mediaInfo;
  let categoryName = "";

  mediaBrowser === "discover"
    ? (categoryName += "Discover ")
    : mediaBrowser === "trending"
    ? (categoryName += "Trending ")
    : "";

  const filterName = formatFilterName(filterType);

  filterName === "On The Air"
    ? (categoryName += "Upcoming ")
    : filterName
    ? (categoryName += `${filterName} `)
    : "";

  mediaType === "movie"
    ? (categoryName += "Movies")
    : mediaType === "tv"
    ? (categoryName += "Tv Shows")
    : "";

  return categoryName;
};

export default formatCategoryName;

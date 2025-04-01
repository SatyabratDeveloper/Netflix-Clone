import useTmdbQueries from "../hooks/useTmdbQueries";

const UserLandingPage = () => {
  const queryList = [
    { mediaBrowser: "discover", mediaType: "movie" },
    { mediaBrowser: "discover", mediaType: "tv" },
    { mediaBrowser: "trending", mediaType: "all" },
    { mediaBrowser: "trending", mediaType: "movie" },
    { mediaBrowser: "trending", mediaType: "tv" },
    { mediaBrowser: "media", mediaType: "movie", filterType: "now_playing" },
    { mediaBrowser: "media", mediaType: "movie", filterType: "popular" },
    { mediaBrowser: "media", mediaType: "movie", filterType: "top_rated" },
    { mediaBrowser: "media", mediaType: "movie", filterType: "upcoming" },
    { mediaBrowser: "media", mediaType: "tv", filterType: "airing_today" },
    { mediaBrowser: "media", mediaType: "tv", filterType: "popular" },
    { mediaBrowser: "media", mediaType: "tv", filterType: "top_rated" },
    { mediaBrowser: "media", mediaType: "tv", filterType: "on_the_air" },
  ];

  const moviesAndTvShows = useTmdbQueries(queryList);

  return <div className="text-white min-h-screen pt-20"></div>;
};

export default UserLandingPage;

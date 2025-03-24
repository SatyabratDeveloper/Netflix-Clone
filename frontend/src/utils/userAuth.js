const extractUserInfo = (user) => {
  const {
    _id,
    username,
    email,
    avatar,
    moviesWatchHistory,
    tvShowsWatchHistory,
    myMoviesList,
    myTvShowsList,
  } = user;
  return {
    uid: _id,
    username,
    email,
    avatar,
    moviesWatchHistory,
    tvShowsWatchHistory,
    myMoviesList,
    myTvShowsList,
  };
};

export { extractUserInfo };

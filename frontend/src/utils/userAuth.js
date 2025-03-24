const extractUserInfo = (user) => {
  const {
    _id,
    displayName,
    email,
    avatar,
    moviesWatchHistory,
    tvShowsWatchHistory,
    myMoviesList,
    myTvShowsList,
  } = user;
  return {
    uid: _id,
    displayName,
    email,
    avatar,
    moviesWatchHistory,
    tvShowsWatchHistory,
    myMoviesList,
    myTvShowsList,
  };
};

export { extractUserInfo };

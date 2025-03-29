import axios from "axios";

/**
 * Function to get discover Movies and Tv Shows data from TMDB API
 * mediaType ---> movie / tv
 * @param {mediaType, include_adult, include_video, language, page}
 * @returns {Object} data
 */
const discoverMoviesAndTvShows = async ({
  mediaType = "movie",
  include_adult = false,
  include_video = false,
  language = "en-US",
  page = 1,
}) => {
  try {
    const { data } = await axios.get(`/api/v1/browse/discover/${mediaType}`, {
      params: {
        include_adult,
        include_video,
        language,
        page,
      },
      withCredentials: true,
    });

    return data;
  } catch (error) {
    console.error(
      "Something went wrong, while fetching 'discover' data from TMDB API.",
      error
    );
  }
};

/**
 * Function to get trending movies and tv shows from TMDB API
 * mediaType ---> all / movie / tv
 * @param {mediaType, include_adult, include_video, language, page}
 * @returns {Object} data
 */
const trendingMoviesAndTvShows = async ({
  mediaType = "all",
  include_adult = false,
  include_video = false,
  language = "en-US",
  page = 1,
}) => {
  try {
    const { data } = await axios.get(
      `/api/v1/browse/trending/${mediaType}/day`,
      {
        params: {
          include_adult,
          include_video,
          language,
          page,
        },
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    console.error(
      "Something went wrong, while fetching 'trending' data from TMDB API.",
      error
    );
  }
};

/**
 * Function to get search data from user query from TMDB API
 * mediaType ---> multi / movie / tv
 * @param {mediaType, query, include_adult, include_video, language, page}
 * @returns {Object} data
 */
const searchMoviesAndTvShows = async ({
  mediaType = "multi",
  query = "",
  include_adult = false,
  include_video = false,
  language = "en-US",
  page = 1,
}) => {
  try {
    const { data } = await axios.get(`/api/v1/browse/search/${mediaType}`, {
      params: {
        query,
        include_adult,
        include_video,
        language,
        page,
      },
      withCredentials: true,
    });

    return data;
  } catch (error) {
    console.error(
      `Something went wrong, while fetching 'search' data from TMDB API.`,
      error
    );
  }
};

/**
 * Function to get search data from user query from TMDB API
 * mediaType ---> movie / tv
 * filterType ---> now playing / airing_today, popular, top rated, upcoming / on_the_air
 * @param {mediaType, filterType, query, include_adult, include_video, language, page}
 * @returns {Object} data
 */
const mediaFilters = async ({
  mediaType = "movie",
  filterType = "now_playing",
  include_adult = false,
  include_video = false,
  language = "en-US",
  page = 1,
}) => {
  try {
    const { data } = await axios.get(
      `/api/v1/browse/${mediaType}/${filterType}`,
      {
        params: {
          include_adult,
          include_video,
          language,
          page,
        },
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    console.error(
      "Something went wrong, while fetching media from TMDB API.",
      error
    );
  }
};

export {
  discoverMoviesAndTvShows,
  trendingMoviesAndTvShows,
  searchMoviesAndTvShows,
  mediaFilters,
};

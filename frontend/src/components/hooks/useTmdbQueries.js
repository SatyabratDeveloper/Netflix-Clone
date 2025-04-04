import { useState, useEffect } from "react";
import {
  discoverMoviesAndTvShows,
  trendingMoviesAndTvShows,
  searchMoviesAndTvShows,
  mediaFilters,
} from "../../api/tmdbService.js";

const useTmdbQueries = (queryList) => {
  const [tmdbData, setTmdbData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const results = await Promise.all(
          queryList.map(async (item) => {
            const { mediaBrowser, mediaType, filterType } = item;

            // Select the correct API function based on "mediaBrowser"
            const mediaBrowserFunction = {
              discover: discoverMoviesAndTvShows,
              trending: trendingMoviesAndTvShows,
              search: searchMoviesAndTvShows,
              media: mediaFilters,
            }[mediaBrowser];

            if (!mediaBrowserFunction) {
              console.warn(`No API function found for ${mediaBrowser}`);
              return null;
            }

            // Fetch data
            const data = await mediaBrowserFunction({ mediaType, filterType });

            // Append id and media info
            data["id"] = crypto.randomUUID();
            data["mediaInfo"] = {
              mediaBrowser: mediaBrowser,
              mediaType: mediaType,
              filterType: filterType ? `${filterType}` : "",
            };

            return data;
          })
        );

        setTmdbData(results.filter(Boolean));
      } catch (error) {
        console.error("Error fetching TMDB data:", error);
      }
    };

    fetchAllData();
  }, [queryList]);

  return tmdbData;
};

export default useTmdbQueries;

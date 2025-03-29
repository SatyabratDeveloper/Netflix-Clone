import { useEffect, useState } from "react";
import {
  discoverMoviesAndTvShows,
  trendingMoviesAndTvShows,
  mediaFilters,
} from "../../api/tmdbService";

const UserLandingPage = () => {
  const [discoveredMovies, setDiscoveredMovies] = useState({});
  const [discoveredTvShows, setDiscoveredTvShows] = useState({});
  const [trending, setTrending] = useState({});
  const [trendingMovies, setTrendingMovies] = useState({});
  const [trendingTvShows, setTrendingTvShows] = useState({});
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [nowPlayingTvShows, setNowPlayingTvShows] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [popularTvShows, setPopularTvShows] = useState({});
  const [topRatedMovies, setTopRatedMovies] = useState({});
  const [topRatedTvShows, setTopRatedTvShows] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [upcomingTvShows, setUpcomingTvShows] = useState({});

  useEffect(() => {
    const fetchMoviesAndTvShows = async () => {
      const discoverMovie = await discoverMoviesAndTvShows({
        mediaType: "movie",
      });
      const discoverTvShow = await discoverMoviesAndTvShows({
        mediaType: "tv",
      });
      const trendingMovieAndTvShow = await trendingMoviesAndTvShows({
        mediaType: "all",
      });
      const trendingMovie = await trendingMoviesAndTvShows({
        mediaType: "movie",
      });
      const trendingTvShow = await trendingMoviesAndTvShows({
        mediaType: "tv",
      });
      const nowPlayingMovie = await mediaFilters({
        mediaType: "movie",
        filterType: "now_playing",
      });
      const nowPlayingTv = await mediaFilters({
        mediaType: "tv",
        filterType: "airing_today",
      });
      const popularMovie = await mediaFilters({
        mediaType: "movie",
        filterType: "popular",
      });
      const popularTv = await mediaFilters({
        mediaType: "tv",
        filterType: "popular",
      });
      const topRatedMovie = await mediaFilters({
        mediaType: "movie",
        filterType: "top_rated",
      });
      const topRatedTv = await mediaFilters({
        mediaType: "tv",
        filterType: "top_rated",
      });
      const upcomingMovie = await mediaFilters({
        mediaType: "movie",
        filterType: "upcoming",
      });
      const upcomingTv = await mediaFilters({
        mediaType: "tv",
        filterType: "on_the_air",
      });

      setDiscoveredMovies(discoverMovie);
      setDiscoveredTvShows(discoverTvShow);
      setTrending(trendingMovieAndTvShow);
      setTrendingMovies(trendingMovie);
      setTrendingTvShows(trendingTvShow);
      setNowPlayingMovies(nowPlayingMovie);
      setNowPlayingTvShows(nowPlayingTv);
      setPopularMovies(popularMovie);
      setPopularTvShows(popularTv);
      setTopRatedMovies(topRatedMovie);
      setTopRatedTvShows(topRatedTv);
      setUpcomingMovies(upcomingMovie);
      setUpcomingTvShows(upcomingTv);
    };

    fetchMoviesAndTvShows();
  }, []);

  return <div className="text-white min-h-screen pt-20"></div>;
};
export default UserLandingPage;

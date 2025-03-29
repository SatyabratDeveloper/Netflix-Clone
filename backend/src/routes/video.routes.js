import { Router } from "express";
import { fetchTmdbAPI } from "../controllers/tmdb.controller.js";

const router = Router();

// Videos routes endpoints
const tmdbEndpoints = [
  "discover/movie",
  "discover/tv",
  "trending/all/day",
  "trending/movie/day",
  "trending/tv/day",
  "movie/now_playing",
  "tv/airing_today",
  "movie/popular",
  "tv/popular",
  "movie/top_rated",
  "tv/top_rated",
  "movie/upcoming",
  "tv/on_the_air",
];

// Routes
tmdbEndpoints.forEach((endpoint) => router.get(`/${endpoint}`, fetchTmdbAPI));

export default router;

import axios from "axios";
import { APIError, APIResponse, asyncHandler } from "../utils/index.js";
import { BASE_URL, TMDB_BASE_KEY } from "../constants.js";

/**
 * Function to fetch data from TMDB API using provided URL
 *
 * @param {string} url - TMDB URL to fetch data from.
 * @returns {Promise<object>} - The JSON response from the TMDB API.
 * @throws {APIError} - Throws an APIError if the request fails.
 */
const tmdbAPI = async (url) => {
  try {
    const { data } = await axios.get(url);

    if (data?.success === false) {
      throw new APIError(
        "TMDB API request failed. Invalid URL or data not found.",
        404
      );
    }

    return data;
  } catch (error) {
    throw new APIError(
      `Error while fetching data from TMDB API: ${error}`,
      500
    );
  }
};

/**
 * Async function to create TMDB API endpoint and fetch data from the TMDB API
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object.
 * @returns {Promise<object>} - JSON response with the discovered data (API Response)
 */
const fetchTmdbAPI = asyncHandler(async (req, res) => {
  const userRequestedUrl = req.url;
  const apiEndpoint = `${BASE_URL}${userRequestedUrl}${TMDB_BASE_KEY}`;

  const data = await tmdbAPI(apiEndpoint);

  return res
    .status(200)
    .json(new APIResponse(200, data, "TMDB data fetched successfully."));
});

export { fetchTmdbAPI };

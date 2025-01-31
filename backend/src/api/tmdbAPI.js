import { APIError, APIResponse, asyncHandler } from "../utils/index.js";
import { BASE_URL, TMDB_BASE_KEY } from "../constants.js";

/**
 * Generates query parameters for a URL based on provided options
 *
 * @param {{include_adult: boolean, include_video: boolean, language: string, page: number}} param - query parameters
 * @returns {string} - A query string
 */
const generateQueryParams = ({
  include_adult,
  include_video,
  language,
  page,
}) => {
  const lang = language ? `&language=${language}` : "&language=en-US";
  const pageIndex = page ? `&page=${page}` : "&page=1";

  const queryParams = `&include_adult=${include_adult}&include_video=${include_video}${lang}${pageIndex}`;

  return queryParams;
};

/**
 * Fetches data from the TMDB API using the provided URL
 *
 * @param {string} url - TMDB url to fetch data
 * @returns {object} - The JSON data returned by the TMDB API
 * @throws {APIError} - Throws an APIError if the data is not found or if there is a server error
 */
const tmdbAPI = async (url) => {
  try {
    const res = await fetch(url);
    const jsonData = await res.json();

    if (jsonData?.success === false)
      throw new APIError("Data not found. URL is incorrect.", 404);

    return jsonData;
  } catch (error) {
    if (error instanceof APIError) throw error;

    throw new APIError(
      "Something went wrong, while fetching data from TMDB API.",
      500
    );
  }
};

/**
 * Async function to fetch discover data from the TMDB API
 * @param {Object} req - The Express request object
 * @param {Object} res - The Express response object.
 * @returns {Promise<object>} - JSON response with the discovered data
 */
const discoverAPI = asyncHandler(async (req, res) => {
  const { mediaType, include_adult, include_video, language, page } = req.body;

  const queryParams = generateQueryParams({
    include_adult,
    include_video,
    language,
    page,
  });

  const url = `${BASE_URL}/discover/${mediaType}${TMDB_BASE_KEY}${queryParams}`;
  const discoverData = await tmdbAPI(url);

  return res
    .status(200)
    .json(
      APIResponse(200, discoverData, "Discover data fetched successfully.")
    );
});

export { discoverAPI };
1;

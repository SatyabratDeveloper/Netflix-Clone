import { APIError, APIResponse, asyncHandler } from "../utils/index.js";
import { BASE_URL, TMDB_BASE_KEY } from "../constants.js";

/**
 * Function generates query params of URL
 *
 * @param {include_adult, include_video, language, page} param
 * @returns queryParams
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
 * Function to fetch tmdbAPI data using URL
 *
 * @param {url} url
 * @returns jsonData | APIError
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
 * Async function to fetch netflix - discover data
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

export { discoverAPI }; 1

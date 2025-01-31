/**
 * Higher-order function to wrap asynchronous request handlers
 *
 * @param {Function} requestHandler - The asynchronous request handler function to be wrapped
 * @returns {Function} - A new function that handles errors and passes them to the next middleware
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandler;

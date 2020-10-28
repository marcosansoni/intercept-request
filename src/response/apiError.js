const apiResponse = require("./apiResponse");

const apiError = (req, res, errors = []) => apiResponse(req, res, 400, {
  success: false,
  errors,
});

module.exports = apiError;



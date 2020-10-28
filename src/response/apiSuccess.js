const apiResponse = require("./apiResponse")

const apiSuccess = (req, res, response) => apiResponse(req, res, 200, {
  success: true,
  ...response,
});

module.exports = apiSuccess

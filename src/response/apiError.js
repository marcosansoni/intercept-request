const sessionHeader = require("../utils/sessionHeader")

const apiError = (req, res, errors = []) => {
  sessionHeader(req, res);
  return res.status(400).json({
    success: false,
    result: errors,
  })
}

module.exports = apiError;



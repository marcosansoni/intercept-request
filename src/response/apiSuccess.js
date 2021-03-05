const sessionHeader = require("../utils/sessionHeader")

const apiSuccess = (req, res, response) => {

  sessionHeader(req, res);

  return res.status(200).json({
    success: true,
    result: response,
  })
}

module.exports = apiSuccess

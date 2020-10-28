const apiResponse = (req, res, statusCode, result, customSessionResponse = undefined) => {

  const {session} = req.headers
  if (customSessionResponse || session) res.header('session', customSessionResponse || session)

  return res.status(statusCode).json({
    success: true,
    result,
  })

}

module.exports = apiResponse

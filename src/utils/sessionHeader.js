const sessionHeader = (req, res, customSessionResponse = undefined) => {
  const { session } = req.headers
  if (customSessionResponse || session) res.header('session', customSessionResponse || session)
}

module.exports = sessionHeader

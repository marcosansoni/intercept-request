const express = require('express')
const apiSuccess = require("./response/apiSuccess");

const router = express.Router()

// Example of a mocked request
router.get('/customEndpoint',
  (req, res) => apiSuccess(req, res, {test: true})
)

module.exports = router


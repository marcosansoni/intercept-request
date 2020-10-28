const express = require('express')
const apiEntities = require("./response/apiEntities");
const zone1 = require("./fixture/zone1");
const order1 = require("./fixture/order1");

const router = express.Router()

router.get('/milkman/zones',
  (req, res) => apiEntities(req, res, 44,[zone1])
)
router.get('/milkman/orders',
  (req, res) => apiEntities(req, res, 44,[order1])
)

module.exports = router


const express = require('express')
const cors = require('cors')
const mockMiddleware = require("./mockMiddleware");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

const app = express()
const apiPort = 5000

const target = process.env.PROXY_PASS

app.use(cors())

// Middleware for mock response
app.use('/', mockMiddleware)

// Default API, proxy pass
app.use('/', createProxyMiddleware({target, changeOrigin: true}));
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

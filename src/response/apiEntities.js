const apiSuccess = require("./apiSuccess");

const apiEntities = (req, res, count, entities) => apiSuccess(req, res, {
  count,
  entities
});

module.exports = apiEntities;


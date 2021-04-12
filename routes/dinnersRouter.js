const express = require("express");
const dinnersRouter = express.Router();

dinnersRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the featured dinner recipes to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the dinner recipe: ${req.body.name} with directions: ${req.body.directions}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dinners");
  })
  .delete((req, res) => {
    res.end("Deleting all featured dinner recipes");
  });

module.exports = dinnersRouter;

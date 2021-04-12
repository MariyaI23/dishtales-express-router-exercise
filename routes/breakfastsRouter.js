const express = require("express");
const breakfastsRouter = express.Router();


breakfastsRouter.route("/")
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
})
.get((req, res) => {
    res.end("Will send all the featured breakfast recipes to you");
})
.post((req, res) => {
    res. end(`Will add the breakfast recipe: ${req.body.name} with directions: ${req.body.directions}`);
})
.put((req, res) => {
    res.statusCode =403;
    res.end("PUT operation not supported on /breakfasts");
})
.delete((req, res) => {
    res.end("Deleting all featured breakfast recipes");
});

module.exports = breakfastsRouter;

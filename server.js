const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3001;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.all("/recipes", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
});

app.get("/recipes", (req, res) => {
    res.end("Will send all the recipes to you");
});

app.post("/recipes", (req, res) => {
    res.end(`Will add the recipe: ${req.body.name} with directions: ${req.body.directions}`);
});

app.put("/recipes", (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /recipes");
});

app.delete("/recipes", (req, res) => {
    res.end("Deleting all recipes");
});

app.get("/recipes/:recipeId", (req, res) => {
    res.end(`Will send details of the recipe: ${req.params.recipeId} to you`);
});

app.post("/recipes/:recipeId", (req, res) => {
    res.statusCode = 403;
    res.end(`POST opration not supported on /recipes/${req.params.recipeId}`);
});

app.put("/recipes/:recipeId", (req, res) => {
    res.write(`Updating the recipe: ${req.params.recipeId}\n`);
    res.end(`Will update the recipe: ${req.body.name} with directions: ${req.body.directions}`);
});

app.delete("/recipes/:recipeId", (req, res) => {
    res.end(`Deleting recipe: ${req.params.recipeId}`);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

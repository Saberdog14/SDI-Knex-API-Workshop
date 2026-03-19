const express = require("express");
const port = 8080;
const app = express();

app.get("/", (req, res) => res.status(200).send("Beginning here"));

app.get("/planes", (req, res) =>
  res.status(200).send("Plane data will be loaded here"),
);

app.listen(port, () => console.log(`Server listening on ${port}.`));

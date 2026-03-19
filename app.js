const express = require("express");
const port = 8080;
const app = express();

app.get("/", (req, res) => res.status(200).send("beginning here"));

app.listen(port, () => console.log(`Server listening on ${port}.`));

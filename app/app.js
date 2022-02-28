require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
};


app.use(cors(corsOptions));
app.use(express.json());  // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded


app.get("/", async (req, res) => {
    return res.end("Welcome to application.");
});

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}.`);
});
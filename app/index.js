require("dotenv").config();
const PORT = process.env.APP_DOCKER_PORT || 3000;

const express = require("express");
const app = express();

const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:"+PORT
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

app.get("/", async (req, res) => {
    return res.end("Welcome to V9_Application.");
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}.`);
});
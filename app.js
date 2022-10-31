const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
// Your github page origin has to be written EXACTLY like this! https://behu-kea.github.io
const URL_FOR_FRONTEND = "YOUR_GITHUB_PAGE_ORIGIN_HERE";

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// If the application is running localhost allow all requests,
// otherwise add cors for specific website
// Remember to add the NODE_ENV="prod" on server!
const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);

// ========== Import / require posts from data.js ========== //
// Todo

// ========== REST API Implementation ========== //

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// ========== READ: read all posts from posts ========== //
// Todo

// ========== READ: get user by id ========== //
// Todo

// ========== CREATE: create new user and add to posts ========== //
// Todo

// ========== UPDATE: update existing user ========== //
// Todo

// ========== DELETE: delete user ========== //
// Todo

app.listen(port, () => {
    console.log(`Node.js REST API listening at http://localhost:${port}`);
});

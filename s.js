const express = require("express");
const ejs = require("ejs");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const socketManager = require("./src/socket/");
const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
    socketManager.init(server);
    res.render("index");
});

server.listen(PORT, () => {
    console.clear();
    console.log(`\n ____________________________________________________`);
    console.log(`\n [+]  SERVER IS RUNNING - ${HOST}:${PORT}`);
    console.log(`\n [+]  WEB DEVELOPER NAME : GHS JULIAN`);
    console.log(`\n [+]  https://github.com/Ghsjulian`);
    console.log(`\n [+]  https://ghsresume.netlify.app`);
    console.log(` ____________________________________________________\n\n`);
});

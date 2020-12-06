const express = require("express");

const postsRouter = require("./posts/posts-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>The server is working</h1>");
});

server.use("/api/posts", postsRouter);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
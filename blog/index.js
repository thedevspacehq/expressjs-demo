import express from "express";

const app = express();
const port = 3001;

// Get the homepage, showing a list of posts
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get a single post
app.get("/post/:id", (req, res) => {
  res.send("Hello, World!");
});

// Add a new post
app.post("/post", (req, res) => {
  res.send("Hello, World!");
});

// Update an existing post
app.put("/post", (req, res) => {
  res.send("Hello, World!");
});

// Delete a post
app.delete("/post", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});

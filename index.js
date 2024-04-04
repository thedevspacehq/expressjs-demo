import express from "express";
import User from "./models/user.js";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}. Visit http://localhost:${port}.`);
});

app.get("/users/:id/post/:slug", (req, res) => {
  res.send(req.params);
});

app.post("/user", (req, res) => {
  const { username, email } = req.body;
  User.createUser(username, email, (err, newUser) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(newUser);
  });
});
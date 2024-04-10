import express from "express";
import User from "./models/user.js";
import dashboardRouter from "./routes/dashboard.js";

const app = express();
const port = 3001;

app.use("/dashboard", dashboardRouter);

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

// Get all users
app.get("/users", (req, res) => {
  User.getAll((err, users) => {
    res.json(users);
  });
});

// Get a single user by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, user) => {
    res.json(user);
  });
});

// Create a new user
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  User.create(username, email, (err, userId) => {
    res.status(201).json({ id: userId, message: "User created successfully" });
  });
});

// Update an existing user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  User.update(id, username, email, () => {
    res.json({ message: "User updated successfully" });
  });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.delete(id, () => {
    res.json({ message: "User deleted successfully" });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}. Visit http://localhost:${port}.`);
});

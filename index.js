import express from "express";
import User from "./models/user.js";
import dashboardRouter from "./routes/dashboard.js";

const app = express();
const port = 3001;

app.use("/dashboard", dashboardRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// app.get("/users/:id", (req, res) => {
//   res.send(`Show user profile for ${req.params.id}`);
// });

app.post("/users/:id", (req, res) => {
  // Retrieve user info from database based on id
  res.send(`<p>Create new user ${req.params.id}</p>`);
});

// app.delete("/users/:id", (req, res) => {
//   res.send(`Delete user ${req.params.id}`);
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}. Visit http://localhost:${port}.`);
});

// app.post("/user", (req, res) => {
//   const { username, email } = req.body;
//   User.createUser(username, email, (err, newUser) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json(newUser);
//   });
// });

import express from "express";
import userRouter from "./routes/users.js";

const app = express();
const port = 3001;

app.use(express.json()); // MIddleware that allows Express to parse request body in JSON

app.set("views", "./views"); // Defines the location of the view templates
app.set("view engine", "pug"); // Defined the template engine

// The homepage
app.get("/", (req, res) => {
  res.render("index");
});

// The user routes
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}. Visit http://localhost:${port}.`);
});

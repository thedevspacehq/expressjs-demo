import express from "express";
import userController from "./controllers/userController.js";

const app = express();
const port = 3001;

app.use(express.json()); // MIddleware that allows Express to parse request body in JSON
app.use(express.urlencoded({ extended: true })); // Middleware that allows Express to parse request body in FormData

app.set("views", "./views"); // Defines the location of the view templates
app.set("view engine", "pug"); // Defines the template engine

// The homepage
app.get("/", (req, res) => {
  res.render("index");
});

// The user routes
app
  .route("/users")
  .get(userController.getAllUsers) // Omitted in this lesson
  .post(userController.createNewUser);

app
  .route("/users/:id")
  .get(userController.getUserById) // Omitted in this lesson
  .put(userController.updateUser)
  .delete(userController.deleteUser);

app.route("/upload").get().post();

app.listen(port, () => {
  console.log(`App listening on port ${port}. Visit http://localhost:${port}.`);
});

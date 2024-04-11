import express from "express";
import postRouter from "./routes/post.js";
import postController from "./controllers/postController.js";

const app = express();
const port = 3001;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", postController.getAllPosts);
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});

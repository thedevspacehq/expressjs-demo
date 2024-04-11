import express from "express";
import postRouter from "./routes/post";
import postController from "./controllers/postController";

const app = express();
const port = 3001;

app.get("/", postController.getAllPosts);
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});

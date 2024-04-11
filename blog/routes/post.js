import { Router } from "express";
import postController from "../controllers/postController.js";

const postRouter = Router();

postRouter
  .route("/new")
  .get(postController.newPost)
  .post(postController.createPost);

postRouter
  .route("/edit/:id")
  .get(postController.editPost)
  .put(postController.updatePost);

postRouter
  .route("/:id")
  .get(postController.getPostById)
  .delete(postController.deletePost);

export default postRouter;

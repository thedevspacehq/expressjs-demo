import { Router } from "express";
import postController from "../controllers/postController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const postRouter = Router();

postRouter
  .route("/new")
  .get(postController.newPost)
  .post(upload.single("picture"), postController.createPost);

postRouter
  .route("/edit/:id")
  .get(postController.editPost)
  .put(upload.single("picture"), postController.updatePost)
  .delete(postController.deletePost);

postRouter.route("/:id").get(postController.getPostById);

export default postRouter;

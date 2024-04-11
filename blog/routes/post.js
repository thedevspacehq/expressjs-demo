import { Router } from "express";
const postRouter = Router();

postRouter.route("/:id").get().delete();
postRouter.route("/new").get().post();
postRouter.route("/edit/:id").get().put();

export default postRouter;

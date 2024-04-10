import { Router } from "express";
const router = Router();

router.get("/user/:id", (req, res) => {
  res.send("Show user");
});

router.delete("/user/:id", (req, res) => {
  res.send("Delete user");
});

router.post("/user/new", (req, res) => {
  res.send("Create user");
});

export default router;

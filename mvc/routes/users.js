import { Router } from "express";
import userController from "../controllers/userController.js";
import User from "../models/user.js";

const router = Router();

// router
//   .route("/")
//   .get((req, res) => {
//     res.send("Show a list of all users.");
//   })
//   .post((req, res) => {
//     res.send("Create a new user.");
//   });

// router
//   .route("/:id")
//   .get((req, res) => {
//     res.send(`Showing details of user ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update user ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delete user ${req.params.id}`);
//   });

router
  .route("/")
  .get((req, res) => {
    res.send("Show a list of all users.");
  })
  .post((req, res) => {
    const { username, email } = req.body;
    User.create(username, email, (err, userId) => {
      res
        .status(201)
        .json({ id: userId, message: "User created successfully" });
    });
  });

router
  .route("/:id")
  .get(
    // (req, res) => {
    //   res.send(`Showing details of user ${req.params.id}`);
    // }
    userController.getUserById
  )
  .put((req, res) => {
    res.send(`Update user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user ${req.params.id}`);
  });

export default router;

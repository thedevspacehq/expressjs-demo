import User from "../models/user.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/"); // Save files to the 'uploads' directory
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // Add a timestamp to the filename to make it unique
  },
});

const userController = {
  getUserById: async function (req, res) {
    const id = req.params.id;
    User.getById(id, (err, user) => {
      res.render("user", {
        user,
      });
    });
  },
  getAllUsers: async function (req, res) {},
  createNewUser: async function (req, res) {
    const { username, email } = req.body;
    const filePath = req;
    console.log("File Path:", filePath);

    User.create(username, email, filePath, (err, userID) => {
      res.redirect(303, `/users/${userID}`);
    });
  },
  updateUser: async function (req, res) {
    const { username, email } = req.body;

    User.update(req.params.id, username, email, (err, userID) => {
      res.redirect(303, `/users/${userID}`);
    });
  },
  deleteUser: async function (req, res) {
    console.log(req.params);
    User.delete(req.params.id, (err) => {
      res.redirect(303, `/`);
    });
  },
};

export default userController;

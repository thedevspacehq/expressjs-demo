import User from "../models/user.js";

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
    console.log(req.body);
    User.create(username, email, (err, userID) => {
      res.redirect(`/users/${userID}`);
    });
  },
  updateUser: async function (req, res) {},
  deleteUser: async function (req, res) {},
};

export default userController;

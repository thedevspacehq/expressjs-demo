import User from "../models/user.js";

export const userController = {
  getUserById: async function (req, res) {
    const id = req.params.id;
    User.getById(id, (err, user) => {
      res.render("user", {
        user,
      });
    });
  },
};

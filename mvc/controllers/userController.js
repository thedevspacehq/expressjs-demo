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
};

export default userController;

import prisma from "../libs/prisma";

const userController = {
  listUser: async function (req, res) {},
  showUser: async function (req, res) {},
  newUser: async function (req, res) {},
  createUser: async function (req, res) {
    const { name, email } = req.body;
    await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
  },
  editUser: async function (req, res) {},
  updateUser: async function (req, res) {},
  deleteUser: async function (req, res) {},
};

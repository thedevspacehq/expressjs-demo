import prisma from "../libs/prisma.js";

const userController = {
  list: async function (req, res) {
    const users = await prisma.user.findMany();

    res.render("user/list", {
      users,
    });
  },

  show: async function (req, res) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.render("user/show", {
      user,
    });
  },

  new: async function (req, res) {
    res.render("user/new");
  },

  create: async function (req, res) {
    const { title, content } = req.body;
    const picture = req.file;

    const user = await prisma.user.create({
      data: {
        title: title,
        content: content,
        picture: picture.path,
      },
    });

    res.redirect(`/users/${user.id}`);
  },

  edit: async function (req, res) {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.render("user/edit", {
      user,
    });
  },

  update: async function (req, res) {
    const { title, content } = req.body;
    const picture = req.file;

    const user = await prisma.user.update({
      data: {
        title: title,
        content: content,
        picture: picture.path,
      },
    });

    res.redirect(`/users/${user.id}`);
  },

  delete: async function (req, res) {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/");
  },
};

export default userController;

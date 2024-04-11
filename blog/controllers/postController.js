import Post from "../models/post.js";

const postController = {
  getAllPosts: async function (req, res) {
    Post.getAll((err, posts) => {
      res.render("index", {
        posts,
      });
    });
  },

  getPostById: async function (req, res) {
    const id = req.params.id;
    Post.getById(id, (err, post) => {
      res.render("post/show", {
        post,
      });
    });
  },

  newPost: async function (req, res) {
    res.render("post/new");
  },

  createPost: async function (req, res) {
    const { title, content } = req.body;
    Post.create(title, content, (err, postID) => {
      res.redirect(`/post/${postID}`);
    });
  },

  editPost: async function (req, res) {
    res.render("post/edit");
  },

  updatePost: async function (req, res) {},

  deletePost: async function (req, res) {},
};

export default postController;

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
      console.log(postID);
      res.redirect(`/posts/${postID}`);
    });
  },

  editPost: async function (req, res) {
    const id = req.params.id;
    Post.getById(id, (err, post) => {
      res.render("post/edit", {
        post,
      });
    });
  },

  updatePost: async function (req, res) {
    const { title, content } = req.body;
    console.log(req.body);
    Post.update(req.params.id, title, content, (err, postID) => {
      res.redirect(`/posts/${postID}`);
    });
  },

  deletePost: async function (req, res) {
    Post.delete(req.params.id, (err) => {
      res.redirect("/");
    });
  },
};

export default postController;

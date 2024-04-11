import Post from "../models/post";

export const postController = {
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
};

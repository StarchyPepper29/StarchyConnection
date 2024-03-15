const express = require("express");
const Router = express.Router();
const {
  AddBlogPost,
  GetBlogPosts,
  GetBlogPost,
  UpdateBlogPost,
  DeleteBlogPost,
} = require("./controller");

Router.post("/", AddBlogPost);
Router.get("/", GetBlogPosts);
Router.get("/:id", GetBlogPost);
Router.put("/:id", UpdateBlogPost);
Router.delete("/:id", DeleteBlogPost);

module.exports = Router;

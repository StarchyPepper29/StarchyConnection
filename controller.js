const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Blog = require("./model");

const AddBlogPost = async (req, res) => {
  const PostToAdd = await Blog.create(req.body);
  if (PostToAdd) {
    res.status(200).json(PostToAdd);
  } else {
    res.status(500).json("Error adding post");
  }
};
const GetBlogPosts = async (req, res) => {
  const Posts = await Blog.find();
  if (Posts) {
    res.status(200).json(Posts);
  } else {
    res.status(500).json("Error getting posts");
  }
};
const GetBlogPost = async (req, res) => {
  const Post = await Blog.findById(req.params.id);
  if (Post) {
    res.status(200).json(Post);
  } else {
    res.status(500).json("Error getting post");
  }
};
const UpdateBlogPost = async (req, res) => {
  const PostToUpdate = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (PostToUpdate) {
    res.status(200).json(PostToUpdate);
  } else {
    res.status(500).json("Error updating post");
  }
};
const DeleteBlogPost = async (req, res) => {
  const PostToDelete = await Blog.findByIdAndDelete(req.params.id);
  if (PostToDelete) {
    res.status(200).json(PostToDelete);
  } else {
    res.status(500).json("Error deleting post");
  }
};

module.exports = {
  AddBlogPost,
  GetBlogPosts,
  GetBlogPost,
  UpdateBlogPost,
  DeleteBlogPost,
};

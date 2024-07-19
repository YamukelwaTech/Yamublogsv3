const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const multer = require("multer");
const fs = require("fs");

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Convert buffer to Base64
const bufferToBase64 = (buffer) => buffer.toString("base64");

// Create a new blog post with image uploads
router.post(
  "/",
  upload.fields([
    { name: "iconImage", maxCount: 1 },
    { name: "backgroundImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const iconImageBase64 = bufferToBase64(req.files.iconImage[0].buffer);
      const backgroundImageBase64 = bufferToBase64(
        req.files.backgroundImage[0].buffer
      );

      const blog = new Blog({
        ...req.body,
        iconImage: iconImageBase64,
        backgroundImage: backgroundImageBase64,
      });

      await blog.save();
      res.status(201).send(blog);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a specific blog post
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a blog post
router.patch("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a comment to a blog post
router.post("/:id/comments", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send();
    }
    blog.comments.push(req.body);
    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

const express = require("express");
const extractFile = require("../middleware/file");

const postController = require("../controllers/post");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", checkAuth, extractFile, postController.createPost);

router.put("/:id", checkAuth, extractFile, postController.updatePost);

router.get("", postController.getPosts);

router.get("/:id", checkAuth, postController.getPost );

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;

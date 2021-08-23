const express = require("express");
const {
  createCommentCtrl,
  fetchAllCommentsCtrl,
  fetchCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
} = require("../../controllers/comments/commentCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const commentRoutes = express.Router();

commentRoutes.post("/", authMiddleware, createCommentCtrl);
commentRoutes.get("/", fetchAllCommentsCtrl);
commentRoutes.get("/:id", authMiddleware, fetchCommentCtrl);
commentRoutes.put("/:id", authMiddleware, updateCommentCtrl);
commentRoutes.delete("/:id", authMiddleware, deleteCommentCtrl);
module.exports = commentRoutes;

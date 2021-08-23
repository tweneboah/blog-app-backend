const express = require("express");
const {
  createCategoryCtrl,
  fetchCategoriesCtrl,
  fetchCategoryCtrl,
  updateCategoryCtrl,
  deleteCateoryCtrl,
} = require("../../controllers/category/categoryCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");
const categoryRoute = express.Router();

categoryRoute.post("/", authMiddleware, createCategoryCtrl);
categoryRoute.get("/", fetchCategoriesCtrl);
categoryRoute.get("/:id", fetchCategoryCtrl);
categoryRoute.put("/:id", authMiddleware, updateCategoryCtrl);
categoryRoute.delete("/:id", authMiddleware, deleteCateoryCtrl);
module.exports = categoryRoute;

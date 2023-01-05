const router = require("express").Router()
const { auth, getPermissioon } = require("../app/middleware/auth.middleware")
const Blog = require('../app/controller/blog.controller')

router.post("/addBlog",auth,getPermissioon,Blog.addBlog)
router.post("/deleteBlog/:id",auth,getPermissioon,Blog.deleteBlog)
router.post("/editBlog/:id",auth,getPermissioon,Blog.editBlog)
router.get("/getAllBlogs",Blog.getAllBlogs)
router.get("/getSingleBlog/:id",Blog.getSingleBlog)
// router.post("/bookmarkBlog/:id",auth,Blog.bookmarkBlog)
module.exports = router
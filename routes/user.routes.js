const router = require("express").Router()
const {auth} = require("../app/middleware/auth.middleware")
const User = require("../app/controller/user.controller")

router.post("/register", User.register)
router.post("/login", User.login)
router.post("/logout",auth, User.logout)
router.post("/addQualification",auth,User.addQualification)
router.post("/bookmarkBlog/:id",auth,User.bookmarkBlog)
router.post("/bookmarkPlant/:id",auth,User.bookmarkPlant)
router.post("/editProfileData",auth,User.editProfileData)
module.exports = router

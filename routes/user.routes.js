const router = require("express").Router()
const {auth, getPermissioon} = require("../app/middleware/auth.middleware")
const User = require("../app/controller/user.controller")

router.post("/register", User.register)
router.post("/login", User.login)
router.post("/logout",auth, User.logout)


router.post("/addQualification",auth,User.addQualification)

router.post("/addStore",auth,getPermissioon,User.addStore)

router.post("/bookmarkBlog/:id",auth,User.bookmarkBlog)
router.post("/bookmarkproduct/:id",auth,User.bookmarkProduct)
router.post("/removeProductFromBookmark/:id",auth,User.removeProductFromBookmark)
router.post("/removeBlogFromBookmark/:id",auth,User.removeBlogFromBookmark)


router.post("/editProfileData",auth,User.editProfileData)


router.post("/addProductToShoppingCart/:id",auth,User.addProductToShoppingCart)
router.post("/deleteProductFromShoppingCart/:id",auth,User.deleteProductFromShoppingCart)


router.get("/getProductReview/:id",auth,User.getProductReview)

module.exports = router

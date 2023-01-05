const router = require("express").Router()
const { auth } = require("../app/middleware/auth.middleware")
const Store = require('../app/controller/store.controller')

router.post("/addStore",auth,Store.addStore)

//plants routes

router.post("/addProduct",auth,Store.addProduct)

module.exports = router
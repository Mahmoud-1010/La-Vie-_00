const router = require("express").Router()
const { auth } = require("../app/middleware/auth.middleware")
const Store = require('../app/controller/store.controller')


//plants routes

router.post("/addProduct",auth,Store.addProduct)
router.post("/removeProduct/:id",auth,Store.removeProduct)

module.exports = router
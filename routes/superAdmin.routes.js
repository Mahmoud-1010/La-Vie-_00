const router = require("express").Router()
const { auth } = require("../app/middleware/auth.middleware")
const SuperAdmin = require('../app/controller/superAdmin.controller')

router.post("/addAdmin",auth,SuperAdmin.addAdmin)
router.post("/removeAdmin",auth,SuperAdmin.removeAdmin)
router.post("/addUrl",auth,SuperAdmin.addUrl)
module.exports = router
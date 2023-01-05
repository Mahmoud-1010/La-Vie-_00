const router = require("express").Router()
const { auth, getPermissioon } = require("../app/middleware/auth.middleware")
const SuperAdmin = require('../app/controller/superAdmin.controller')

router.post("/addAdmin",auth,getPermissioon,SuperAdmin.addAdmin)
router.post("/removeAdmin",auth,getPermissioon,SuperAdmin.removeAdmin)
router.post("/addUrl",auth,getPermissioon,SuperAdmin.addUrl)
module.exports = router
const router = require("express").Router()
const { auth,getPermissioon } = require("../app/middleware/auth.middleware")
const Admin = require('../app/controller/admin.controller')

router.post("/activatePartner/:id",auth,getPermissioon,Admin.activatePartner)
router.post("/removePartner/:id",auth,getPermissioon,Admin.removePartner)
module.exports = router
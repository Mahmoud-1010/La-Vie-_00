const router = require("express").Router()
const { auth } = require("../app/middleware/auth.middleware")
const Admin = require('../app/controller/admin.controller')

router.post("/activatePartner/:id",auth,Admin.activatePartner)
router.post("/removePartner/:id",auth,Admin.removePartner)
module.exports = router
const express = require("express")

const app = express()
app.use(express.json())

const userRoutes = require("../routes/user.routes")
const blogRoutes = require("../routes/blog.routes")
const storeRoutes = require("../routes/store.routes")
const superAdminRoutes = require("../routes/superAdmin.routes")
const adminRoutes = require("../routes/admin.routes")
require("../db/connect")

app.use("/api/user/",userRoutes)
app.use("/api/blog/",blogRoutes)
app.use("/api/store/",storeRoutes)
app.use("/api/superAdmin/",superAdminRoutes)
app.use("/api/admin/",adminRoutes)

module.exports = app
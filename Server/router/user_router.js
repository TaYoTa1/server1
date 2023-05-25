const Router = require("express").Router
const router = Router()

const users = require("../contollers/user_controller")
router.get("/allusers", users.GetUser)
router.post("/adduser", users.AddUser)
router.delete("/deluser", users.DelUser)
router.post("/upuser", users.UpdateUser)

module.exports = router
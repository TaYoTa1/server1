const Router = require("express").Router
const router = Router()

const pcs = require("../contollers/pc_controller")
router.get("/pcs", pcs.GetPC)
router.post("/addpc", pcs.AddPC)
router.delete("/delpc", pcs.DelPC)
router.post("/updpc", pcs.UpdatePC)

module.exports = router
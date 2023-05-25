const PC_Service = require('../services/pc_service.js')

class PCController {
    async GetPC(req, res, next) {
        try {
            res.json(await PC_Service.GetAllPCs())
        } catch (e) {
            console.log(e)
            res.json({ "error": "EXCEPTION" })
        }
    }

    async AddPC(req, res, next) {
        try {
            res.json(await PC_Service.AddPC(req))
        } catch (e) {
            console.log(e)
            res.json({"error": "EXCEPTION"})
        }
    }
    async DelPC(req, res, next) {
        {
            try {
                res.json(await PC_Service.DeletePC(req))
            } catch(e) {
                console.log(e)
                res.json({"error": "EXCEPTION"})
            }
        }
    }
    async UpdatePC(req, res, next) {
        {
            try {
                res.json(await PC_Service.UpdatePC(req))
            } catch(e) {
                console.log(e)
                res.json({"error": "EXCEPTION"})
            }
        }
    }
}
module.exports = new PCController()

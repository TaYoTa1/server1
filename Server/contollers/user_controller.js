const userService = require('../services/user_service.js')

class UserController {
    async GetUser(req, res, next) {
        try {
            res.json(await userService.GetAllUsers())
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }

    async AddUser(req, res, next) {
        try {
            res.json(await userService.AddUser(req))
        } catch (e) {
            console.log(e)
            res.json({"error": "EXCEPTION"})
        }
    }
    async DelUser(req, res, next) {
        {
            try {
                res.json(await userService.DeleteUser(req))
            } catch(e) {
                console.log(e)
                res.json({"error": "EXCEPTION"})
            }
        }
    }
    async UpdateUser(req, res, next) {
        {
            try {
                res.json(await userService.UpdateUser(req))
            } catch(e) {
                console.log(e)
                res.json({"error": "EXCEPTION"})
            }
        }
    }
}
module.exports = new UserController()

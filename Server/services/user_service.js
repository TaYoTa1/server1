const { PrismaClient } = require('@prisma/client')

const prisma_client = new PrismaClient()

class UserService {
    
    async GetAllUsers() {
        return prisma_client.user.findMany({});
    }

    async AddUser(req) {
        const { firstName, lastName, email, numberPhone, position, jobPlace } = req.body

        try {
            var bHasEmail = await prisma_client.user.count(
                { "where": { "email": email } },
                
            ) > 0 ? true : false
            
            var bHasPhone= await prisma_client.user.count(
                { "where": { "numberPhone": numberPhone } },
                
            ) > 0 ? true : false
            if (bHasPhone) return { "ERROR" : "PHONE EXISTS" }
            if (bHasEmail) return { "ERROR" : "EMAIL EXISTS" }

            const user = await prisma_client.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    numberPhone,
                    position,
                    jobPlace,
                    aboutPC: {}
                }
            })
            return user
        } catch (e) {
            return e
        }

    }
    async DelUser(req, res, next)
    {
        try {
            const {id} = req.body
            console.log(id)
            const user = await prisma_client.user.findFirst(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            if (!user) {
                return { "ERROR": "user not found" }
            }

            const result = await prisma_client.user.delete(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            return result

        } catch (e) {
            console.log(e)
        }
    }
    async UpdateUser(req)
        {
            const { id, key, val } = req.body;
            if (!key)
                return { "error": "KEY NOT PRESENT" }
    
            if (key == "id")
                return { "error": "You cannot change id" }
    
            if (key == "email" || key == "numberPhone")
            {
                var bHas = await prisma_client.user.count({"where": {"id": id}, "data": {[key]: val}}) 
                    > 0 ? true : false
                if (bHas)
                {
                    return {"error" : "ERROR - DUPLICATE"}
                }
            }
    
            var usr = await prisma_client.user.update({"where": {"id": id}, "data": {[key]: val}})
            return usr
        }
    }
module.exports = new UserService;
const { PrismaClient } = require('@prisma/client')

const prisma_client = new PrismaClient()

class PCService {
    
    async GetAllPCs() {
        return prisma_client.PC.findMany({});
    }

    async AddPC(req) {
        const { motherboard, processor, videocard, RAM, keyboard, monitor, userId } = req.body;

        try {
            const newPC = await prisma_client.PC.create({
                data: {
                    motherboard,
                    processor,
                    videocard,
                    RAM,
                    keyboard,
                    monitor,
                    userId
                }
            })
            return newPC
        } catch (e) {
            return e
        }

    }
    async DeletePC(req) {
        {
            const { id } = req.body;
            
            await prisma_client.PC.deleteMany({"where" : { "id": id}})
            return { "error" : "SUCCESS" }
        }
    }
    async UpdatePC(req)
        {
            const { id, key, val } = req.body;
            if (!key)
                return { "error": "KEY NOT PRESENT" }
    
            if (key == "id")
                return { "error": "You cannot change id" }
                
            var usr = await prisma_client.PC.update({"where": {"id": id}, "data": {[key]: val}})
            return usr
        }
    }
module.exports = new PCService;
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const user_router = require("./router/user_router")
const pc_router = require("./router/pc_router")

const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/users", user_router)
app.use("/api/pc", pc_router)

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`server started on port = ${PORT}`)
        })
    } catch(e){
        console.log(e)
    }
}

start()
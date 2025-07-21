import express from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("hii there")
})

app.get("/owner", (req, res) => {
    res.send("this is ritesh")
})

app.get("/username:id", (req, res) => {
    const name  = req.params.id
    console.log(name)
    res.send(name)
})

app.get("/login", (req, res) => {
    res.send("this is login route")
})

app.listen(3000, () => console.log("Server is listening at port 3000"))
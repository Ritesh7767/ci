import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("hii there")
})

app.get("/owner", (req, res) => {
    res.send("this is ritesh")
})

app.listen(3000, () => console.log("Server is listening at port 3000"))
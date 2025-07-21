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

app.get("username:id", (req, res) => {
    const name  = req.params.id
    res.send(name)

})

app.listen(3000, () => console.log("Server is listening at port 3000"))
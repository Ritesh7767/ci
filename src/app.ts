import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("hii there")
})

app.listen(3000, () => console.log("Server is listening at port 3000"))
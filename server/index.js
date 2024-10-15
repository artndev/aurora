import express from "express"
import articles from "./articles.js"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", articles)
app.listen(5000, () => {console.log("5000!")})
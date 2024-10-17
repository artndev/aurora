import express from "express"
import articles from "./articles.js"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(cors({origin: true, credentials: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", articles)
app.listen(5000, () => {console.log("5000!")})
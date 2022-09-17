import express from "express"
import cors from "cors"
import http from "http"
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT | 5000

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})

app.get("/", (req, res) => {
  res.send("testing")
})

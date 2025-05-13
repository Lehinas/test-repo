const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3001

app.use(cors())

app.get("/random", (req, res) => {
		const num = Math.floor(Math.random() * 5) + 1

		setTimeout(() => {
				res.json({number: num})
		}, num * 1000)
})

app.listen(PORT, () => {
		console.log(`Сервер запущен на http://localhost:${PORT}`)
})

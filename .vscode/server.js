const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
console.log("Here")
res.sendStatus(500).json({message:"Error"})
})

app.listen(port)

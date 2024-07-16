const express = require('express')
const routes = require('./routes')

const app = express()

app.get('/', (req, res) => res.json({ message: "OK" }))

app.use(routes)

app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})

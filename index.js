const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Ohayou Sekai!')
})

const charRoutes = require('./routes/char')
app.use('/api/v1/char', charRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

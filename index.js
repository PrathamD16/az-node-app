const express = require('express')
const app = express()

app.get('/greet', (req, res) => {
  res.json({ message: 'Hello, World!' })
})

app.get('/flood', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Goodbye, World!' })
  }, 10000) // Simulate a long-running request
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
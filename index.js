require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login first </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Your server is listing on ${process.env.port}`);
})
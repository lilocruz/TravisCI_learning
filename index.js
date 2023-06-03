// Importing the express library
const express = require('express')

// Initializing an express app
const app = express()

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200).json('Fusion is up & running!')  
})

// Exporting the home route so it can be tested
module.exports = app.listen(port, () => console.log(`The application is running on ${port}`))
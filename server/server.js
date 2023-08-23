const express = require('express')
const connectDatabase = require('./config/database')
require('dotenv')

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
connectDatabase();
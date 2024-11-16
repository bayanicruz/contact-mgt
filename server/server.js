const express = require('express')
const connectDatabase = require('./config/database')
const cors = require('cors')
require('dotenv')

const app = express();


// Middleware
app.use(cors())  // Allow cross-origin requests
app.use(express.json())  // Parse JSON bodies

// Routes
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
connectDatabase();
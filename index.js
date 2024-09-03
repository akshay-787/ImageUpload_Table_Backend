const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')
const cors = require('cors')
const path = require('path');

const itemRoutes = require('./routes/itemRoutes')

dotenv.config()
const app = express()
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
app.use('/api',itemRoutes)

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send('<h1>App is working</h1>')
})
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started on http://localhost:${PORT}`)
    })
})
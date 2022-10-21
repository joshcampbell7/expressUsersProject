const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({path:'./.env'})
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')
//express app
const app = express()



const PORT = process.env.PORT
DB_URI = process.env.MONGO_URI

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next)=>{
    next()
})
app.set('views','./views')
app.set('view engine','ejs')


//Routes

app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/api/users',userRoutes)

//connect to DB and listen on port
mongoose.connect(DB_URI)
.then(()=>{
    app.listen(PORT|| 500,(err)=>{
        console.log("listening on port",PORT)
    }) 
})
.catch((error)=>{
    console.log(error)
})

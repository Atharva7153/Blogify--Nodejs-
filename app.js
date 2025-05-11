//external imports
const express = require('express')

//local imports
const userRoute = require('./routes/userRoute')

//initialize app
const app = express()

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//Body parser
app.use(express.urlencoded({ extended: true }))

//Routes 
app.use(userRoute)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`server is running ond http://localhost:${PORT}`)
})
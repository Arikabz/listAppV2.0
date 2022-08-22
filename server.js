console.log("Server Ran")
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const listRoutes = require('./routes/list')

require('dotenv').config({path: './config/.env'})

//Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection}),
    })
)
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/list', listRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})

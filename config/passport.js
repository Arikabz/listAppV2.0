const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User.js')

module.exports = function (passport) {
   passport.use(new LocalStrategy({ usernameField: 'email'}, 
        (email, password, done) => {
            User.findOne()
        }))
}

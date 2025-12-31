const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    fullname:String,
    dateofbrith:Date,
    usertype:String,
    userstatus:String,
    name_image:String
})

module.exports = new mongoose.model('user', userschema);
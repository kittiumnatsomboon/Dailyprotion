const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    usertype: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    },
    userstatus: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    name_image: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)

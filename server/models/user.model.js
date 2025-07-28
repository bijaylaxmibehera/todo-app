const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    profilePictureUrl: String,
    nickname: String,
    phoneNumber: {
      type: Number,
      required: true
    },
    address: String,
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
      }
    ]
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User

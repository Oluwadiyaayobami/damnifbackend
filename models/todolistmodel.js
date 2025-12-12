const mongoose = require('mongoose')


const todolistschma = new mongoose.Schema({
      
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userinformation",
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)
const handlingtodolist = mongoose.model('todolistinfo',todolistschma)

module.exports = handlingtodolist
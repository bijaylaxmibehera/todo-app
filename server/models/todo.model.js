const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Todo text is required"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "process", "completed"],
    default: "pending"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema);

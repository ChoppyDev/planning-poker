const mongoose = require("mongoose")

const room = new mongoose.Schema({
  name: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
})

module.exports = room
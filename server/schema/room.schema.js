const mongoose = require("mongoose")

const room = new mongoose.Schema({
  id: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
})

module.exports = room


// id
// user list

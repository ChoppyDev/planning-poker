const mongoose = require("mongoose")


const user = new mongoose.Schema({
  isAnonymous: Boolean,
  password: String,
  email: String,
  username: String,
  accountCreationDate: Date
})

module.exports = user
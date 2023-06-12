const mongoose = require("mongoose")


const user = new mongoose.Schema({
  id: String,
  isAnonymous: Boolean,
  password: String,
  email: String
})
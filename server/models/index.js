const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.mongoose.set("strictQuery", false)
db.user = require("./user.model")
db.room = require("./user.model")


module.exports = db
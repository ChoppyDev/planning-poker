const mongoose = require("mongoose")
const roomSchema = require("../schema/room.schema")

const Room = mongoose.model("room", roomSchema)

module.exports = Room
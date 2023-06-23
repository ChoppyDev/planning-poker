const db = require("../models")
const Room = db.room



exports.createRoom = (req, res) => {
  const room = new Room({
    name: req.body.name,
    id: "test",
    users: [req.body.creator]
  })


  room.save((err, room) => {
    if (err) {
      res.status.send({ message: err })
      return
    }
    res.send({ message: "Ok" })
  })
}
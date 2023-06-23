const controller = require("../controllers/rooms.js")
// todo : import middlewares for authentificated actions

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    )
    next()
  })

  app.post("/api/rooms/create", controller.createRoom)
}
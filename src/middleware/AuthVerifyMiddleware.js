let jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
  let token = req.headers["token"]
  jwt.verify(token, "mizan1234", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "fail", data: "Unauthorized" })
    } else {
      let email = decoded["data"]["email"]
      req.headers.email = email
      console.log(email)
      next()
    }
  })
}

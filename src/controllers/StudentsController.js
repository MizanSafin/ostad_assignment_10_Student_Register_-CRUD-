const jwt = require("jsonwebtoken")
const StudentsModel = require("../models/StudentsModel")

//Create Students
exports.createStudentProfile = async (req, res) => {
  try {
    let reqBody = req.body
    let result = await StudentsModel.create(reqBody)
    res.status(200).json({ status: "success", data: result })
  } catch (err) {
    res.status(400).json({ status: "fail", data: err })
  }
}

//Login Student Profile
exports.Login = async (req, res) => {
  try {
    let reqBody = req.body
    let result = await StudentsModel.find(reqBody).count()
    let data = await StudentsModel.find(reqBody)
    if (result === 1) {
      let payload = {
        exp: Math.floor(Date.now() / 1000 + 24 * 60 * 60),
        data: data[0],
      }
      let token = jwt.sign(payload, "mizan1234")
      res.status(200).json({ status: "success", token: token, data: data[0] })
    } else {
      res.status(401).json({ status: "fail", data: "Student not Found" })
    }
  } catch (e) {
    res.status(401).json({ status: "fail", data: e.toString() })
  }
}

//Read Student Profile
exports.readStudentProfile = async (req, res) => {
  try {
    let email = req.headers["email"]
    let result = await StudentsModel.findOne({ email })
    if (result) {
      res.status(200).json({ staus: "success", data: result })
    } else {
      res.status(401).json({ staus: "fail", data: "StudentData not found" })
    }
  } catch (e) {
    res.status(401).json({ status: "fail", data: e.toString() })
  }
}

//Update Student Profile
exports.updateStudentProfile = async (req, res) => {
  try {
    let email = req.headers["email"]
    let reqBody = req.body
    let Query = { email }
    let result = await StudentsModel.updateOne(Query, reqBody)
    res.status(200).json({ status: "success", data: result })
  } catch (e) {
    res.status(401).json({ status: "fail", data: e.toString() })
  }
}

//Delte Student Profile
exports.deleteStudentProfile = async (req, res) => {
  try {
    let email = req.headers["email"]
    let Query = { email }
    let result = await StudentsModel.deleteOne(Query)
    res.status(200).json({ status: "success", data: result })
  } catch (e) {
    res.status(401).json({ status: "fail", data: e })
  }
}

//Read All Student Profile
exports.readAllStudentsProfiles = async (req, res) => {
  try {
    let result = await StudentsModel.find({})
    if (result) {
      res.status(200).json({ staus: "success", data: result })
    } else {
      res.status(401).json({ staus: "fail", data: "StudentsData not found" })
    }
  } catch (e) {
    res.status(401).json({ status: "fail", data: e.toString() })
  }
}

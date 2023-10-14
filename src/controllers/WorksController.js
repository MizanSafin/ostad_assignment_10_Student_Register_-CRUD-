const WorksModel = require("../models/WorksModel")

//Create student works controller
exports.createStudentWorks = async (req, res) => {
  try {
    let reqBody = req.body
    let email = req.headers["email"]
    let title = reqBody["title"]
    let classNote = reqBody["classNote"]
    let description = reqBody["description"]
    let status = reqBody["status"]
    let reqJson = {
      title,
      classNote,
      description,
      status,
      email,
    }

    let result = await WorksModel.create(reqJson)
    if (result) {
      res.status(201).json({ status: "success", data: result })
    } else {
      res.status(400).json({ status: "success", data: "No data found" })
    }
  } catch (e) {
    res.status(400).json({ status: "fail", data: e.toString() })
  }
}

//Read student works controller
exports.readStudentWorks = async (req, res) => {
  try {
    let id = req.params.id
    let Query = { _id: id }
    let result = await WorksModel.find(Query)
    res.status(201).json({ status: "success", data: result })
  } catch (e) {
    res.status(400).json({ status: "fail", data: e.toString() })
  }
}

//Update student works controller
exports.updateStudentWorks = async (req, res) => {
  try {
    let id = req.params.id
    let Query = { _id: id }
    let reqBody = req.body

    let result = await WorksModel.updateOne(Query, reqBody)
    if (result) {
      res.status(201).json({ status: "success", data: result })
    } else {
      res.status(400).json({ status: "success", data: "No data found" })
    }
  } catch (e) {
    res.status(400).json({ status: "fail", data: e.toString() })
  }
}

//Dalete student works controller
exports.deleteStudentWorks = async (req, res) => {
  try {
    let id = req.params.id
    let Query = { _id: id }
    let result = await WorksModel.deleteOne(Query)
    res.status(201).json({ status: "success", data: result })
  } catch (e) {
    res.status(400).json({ status: "fail", data: e.toString() })
  }
}

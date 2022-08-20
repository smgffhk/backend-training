const publisherModel= require("../models/publisherModel")

const createpublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await publisherModel.create(author)
    res.send({data: publisherCreated})
}

module.exports.createpublisher= createpublisher

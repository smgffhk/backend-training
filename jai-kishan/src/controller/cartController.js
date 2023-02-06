const cartController = require("../controller/cartController")
const check = require("../validations/validation")
const uuid = require("uuid");
const genrateId = uuid.v4()

const createCard = async function (req, res) {
    try {
        let userData = req.body

        let { cardNumber, cardType, customerName, status, vision, customerID } = userData

        if (!check.isValidRequestBody(userData)) return res.status(400).send({ status: false, message: "please input some data" })

        if (!customerName) return res.status(400).send({ status: false, message: "customerName is mandatory" })
        if (!check.isValidname(customerName)) return res.status(400).send({ status: false, message: `customerName is must in char` })

        if (!cardNumber) return res.status(400).send({ status: false, message: "cardNumber is mandatory" })

        if (!cardType) return res.status(400).send({ status: false, message: "cardType is mandatory" })
        if (!["REGULAR", "SPECIAL"].includes(cardType)) {
            return res.status(400).send({ status: false, message: "cardType only REGULAR/SPECIAL" })
        }

        if (!vision) return res.status(400).send({ status: false, message: "vision is required" });

        if (!status) return res.status(400).send({ status: false, message: "status is required" });
        if (!["ACTIVE", "INACTIVE"].includes(status)) {
            return res.status(400).send({ status: false, message: "status only ACTIVE/INACTIVE" })
        }
        const data = { cardNumber, cardType, customerName, status, vision, customerID: genrateId }

        const createuser = await customerModel.create(data);
        return res.status(201).send({ status: true, message: "User created successfully", data: createuser });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = { createCard }
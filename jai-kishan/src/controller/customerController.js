const customerModel = require("../model/customerModel");
const check = require("../validations/validation")
const uuid = require("uuid");
const genrateId = uuid.v4()


const createcustomer = async function (req, res) {
    try {
        let userData = req.body

        let { firstName, lastName, mobileNumber, DOB, emailID, address, customerID, status } = userData

        if (!check.isValidRequestBody(userData)) return res.status(400).send({ status: false, message: "please input some data" })

        if (!firstName) return res.status(400).send({ status: false, message: "firstName is mandatory" })
        if (!check.isValidname(firstName)) return res.status(400).send({ status: false, message: `firstName is must in char` })

        if (!lastName) return res.status(400).send({ status: false, message: "lastName is mandatory" })
        if (!check.isValidname(lastName)) return res.status(400).send({ status: false, message: `lastName is must in char` })

        if (!mobileNumber) return res.status(400).send({ status: false, message: "mobileNumber is mandatory" })
        if (!check.isValidPhone(mobileNumber)) return res.status(400).send({ status: false, message: "please input mobileNumber nuumber" })
        let checkPhone = await customerModel.findOne({ mobileNumber });
        if (checkPhone) return res.status(400).send({ status: false, message: "This Phone is already registered" });

        if (!DOB) return res.status(400).send({ status: false, message: "DOB is mandatory" })
        if (!Number(DOB)) return res.status(400).send({ status: false, message: "DOB is mandatory" })

        if (!emailID) return res.status(400).send({ status: false, message: "emailID is mandatory" })
        if (!check.isVAlidEmail(emailID)) return res.status(400).send({ status: false, message: "emailID is not valid" })
        let checkEmail = await customerModel.findOne({ emailID });
        if (checkEmail) return res.status(400).send({ status: false, message: "This email is already registered" });

        if (!address) return res.status(400).send({ status: false, message: "address is required" });

        if (!status) return res.status(400).send({ status: false, message: "status is required" });
        if (!["ACTIVE", "INACTIVE"].includes(status)) {
            return res.status(400).send({ status: false, message: "status only ACTIVE/INACTIVE" })
        }

        const data = { firstName, lastName, mobileNumber, DOB, emailID, address, customerID: genrateId, status }

        const createuser = await customerModel.create(data);
        return res.status(201).send({ status: true, message: "User created successfully", data: createuser });

    } catch (error) {
        return res.status(500).send({ status: false, error: error.message })
    }
}

//------------------ delete customer-------------------

const getCustomer = async function (req, res) {
    try {
        const data = await customerModel.find({ status: "ACTIVE", isDeleted: false })
        if (! data)  {
            return res.status(404).send({ status: false, message: "customer not found" })
        }
        else{
        return res.status(200).send({ status: true, message: 'customer profile details', data: activeCustomer })
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

//------------------ delete customer-------------------

const deleteCustomer = async function (req, res) {
    try {
        let customerID = req.params.customerID

        if (!customerID) return res.status(400).send({ status: false, message: "please provide a customerID in params" })
        if (!check.isValidObjectId(customerID)) return res.status(400).send({ status: false, msg: "please enter a valid customerID" })

        let findcustomer = await customerModel.findOne({ _id: customerID, isDeleted: false })
        if (!findcustomer) return res.status(404).send({ status: false, message: "customer is already deleted" })

        let deletecustomer = await customerModel.findByIdAndUpdate({
            _id: findcustomer._id
        },
            { $set: { isDeleted: true } },
            { new: true });
        return res.status(200).send({ status: true, message: "customer sucessfully deleted", deletecustomer });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = { createcustomer, getCustomer, deleteCustomer }

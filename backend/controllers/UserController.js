const User = require("../models/UserModel")

const createUser = async (req, res) => {
    const data = req.body

    const user = await User.create(data)

    res.status(200).send(user)
}

const updateUser = async (req, res) => {
    const user = req.user
    await User.updateOne(user)
}

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        res.status(401).send({ error: 'You must be logged in' })
    }

    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            res.status(401).send({ error: 'You must be logged in' })
        }

        const { userId } = payload
        console.log(payload)

        const user = await User.findById(userId)
        console.log(user)
        req.user = user
        next()
    })
}
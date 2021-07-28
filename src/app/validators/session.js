const User = require('../models/user')
const { compare } = require('bcryptjs')

async function login(req, res, next) {
    const { email, password } = req.body

    console.log(req.body)
    const user = await User.findOne({ where: { email } })

    if (!user) return res.render("Admin/session/login.njk", {
        user: req.body,
        error: "Usuário não cadastrado"
    })

    console.log(user.password)
    const passed = await compare(password, user.password)

    console.log(passed)
    if (!passed) return res.render("Admin/session/login.njk", {
        user: req.body,
        error: "Senha Incorreta!"
    })

    req.user = user

    next()
}

async function forgot(req, res, next){
    const { email } = req.body
    
    try{
        const user = await User.findOne({ where: { email } })

        if (!user) return res.render("Admin/session/forgot-password.njk", {
            user: req.body,
            error: "Email não cadastrado"
        })

        next()
    }catch(err){
        console.error(err)
    }
}
module.exports = {
    login,
    forgot
}
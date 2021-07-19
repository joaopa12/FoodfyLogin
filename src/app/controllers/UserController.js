const user = require('../models/user')

module.exports = {
    async index(req, res){
        let results = await user.all()
        const users = results.rows

        return res.render("Admin/user/index.njk", { users })
    },
    registerForm(req, res){
        return res.render("Admin/user/register.njk")
    },
    async post(req,res){
        const userId = await user.create(req.body)

        return res.redirect('/admin/users')
    }
}
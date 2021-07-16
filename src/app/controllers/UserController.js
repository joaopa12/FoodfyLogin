const user = require('../models/user')

module.exports = {
    registerForm(req, res){
        return res.render("Admin/user/register.njk")
    },
    async post(req,res){
        const userId = await user.create(req.body)

        return res.redirect('/admin/users')
    }
}
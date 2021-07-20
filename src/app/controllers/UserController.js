const User = require('../models/user')

module.exports = {
    async index(req, res){
        let results = await User.all()
        const users = results.rows

        return res.render("Admin/user/index.njk", { users })
    },
    async edit(req, res){
        const { id } = req.params

        let results = await User.find(id)
        const user = results.rows[0]

        return res.render('Admin/user/edit.njk',{ user })
    },
    registerForm(req, res){
        return res.render("Admin/user/register.njk")
    },
    async post(req,res){
        await User.create(req.body)

        return res.redirect('/admin/users')
    },
    async delete(req,res){
        const { id } = req.body

        User.delete(id)

        return res.redirect('/admin/users')
    }
}
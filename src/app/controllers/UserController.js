const user = require('../models/user')
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
    async show(req, res){
        const { id } = req.params

        let results = await User.find(id)
        const userId = results.rows[0]

        req.session.userId = userId

        return res.render('Admin/user/show.njk',{ user:userId })
    },
    async post(req,res){
        const userId = await User.create(req.body)

        req.session.userId = userId
        
        return res.redirect(`/admin/users/${userId}`)
    },
    async put(req,res){
        await User.update(req.body)

        return res.redirect('/admin/users')
    },
    async delete(req,res){
        const { id } = req.body

        User.delete(id)

        return res.redirect('/admin/users')
    },
    // Rotas de perfil de um usuário logado
//routes.get('/admin/profile', ProfileController.index) // Mostrar o formulário com dados do usuário logado
//routes.put('/admin/profile', ProfileController.put)// Editar o usuário logado
}
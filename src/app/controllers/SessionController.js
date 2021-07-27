const { login } = require("../../../../Modulo-7/src/app/controllers/SessionController")

module.exports = {
    loginForm(req, res){
        return res.render("Admin/session/login.njk")
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect("/admin/users/")
    },
    login(req,res){
        req.session.userId = req.user.id

        return res.redirect("/admin/users/")
    }
}
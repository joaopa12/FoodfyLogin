const { logout } = require("../../../../Modulo-7/src/app/controllers/SessionController")

module.exports = {
    loginForm(req, res){
        return res.render("Admin/session/login.njk")
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect("/admin/users/")
    }
}
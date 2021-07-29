const User = require('../models/user')
const mailer = require('../../lib/mailer')
const crypto = require("crypto")

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
    },
    forgotForm(req,res){
        return res.render("Admin/session/forgot-password")
    },
    async forgot(req,res){
         const user = req.user

        //criação do token
        const token = crypto.randomBytes(20).toString("hex")
        
        //expiração do token
        let now = new Date()
        now = now.setHours(now.getHours() + 1)

        await User.update(user.id, {
            reset_token: token,
            reset_token_expires: now
        })
        // enviar email com link de recuperação

        await mailer.sendMail({
            to:user.email,
            from: 'no-reply@Foodfy.com',
            subject: 'Recuperação de Senha',
            html: ` <h2>Perdeu a chave?</h2>
            <p>Não se preocupe, clique no link para mudar a sua senha</p>
            <p>
               <a href="http://localhost:3000/admin/users/password-reset?token=${token}" target="_blank">
               Recuperar Senha
               </a>
            </p>
            `
        })
        
        return res.render('Admin/session/forgot-password.njk', {
            user:req.body,
            sucess:"Verifique seu Email!"
        })
    }
}
const express = require('express')
const routes = express.Router()
const { onlyUsers, isLoggedRedirectToUsers } = require('../app/middlewares/session')

const UserController = require('../app/controllers/UserController')
const SessionController = require('../app/controllers/SessionController')

const UserValidator = require('../app/validators/user')
const SessionValidator = require('../app/validators/session')


// login/logout
routes.get("/login",isLoggedRedirectToUsers, SessionController.loginForm)
routes.post("/login", SessionValidator.login, SessionController.login)
routes.post("/logout", SessionController.logout)

// forgot/reset password
routes.get('/forgot-password', SessionController.forgotForm)
routes.post('/forgot-password',SessionValidator.forgot, SessionController.forgot)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/password-reset', SessionValidator.reset, SessionController.reset) 

//User Register
routes.get('/register', UserController.registerForm)
routes.post('/register', UserValidator.post, UserController.post)

// Rotas que o administrador irá acessar para gerenciar usuários
routes.get('/', UserController.index)
routes.get("/:id", UserController.show)
routes.get("/:id/edit", UserController.edit)
routes.put('/', UserValidator.update,UserController.update)
routes.delete("/", UserController.delete)
  
module.exports = routes
const express = require('express')
const routes = express.Router()


const UserController = require('../app/controllers/UserController')
const SessionController = require('../app/controllers/SessionController')

const UserValidator = require('../app/validators/user')


// login/logout
routes.get("/login", SessionController.loginForm)

//User Register
routes.get('/register', UserController.registerForm)
routes.post('/register', UserController.post)

// Rotas que o administrador irá acessar para gerenciar usuários
routes.get('/', UserController.index)
routes.get("/:id", UserController.show)
routes.get("/:id/edit", UserController.edit)
routes.put('/', UserController.put)
routes.delete("/", UserController.delete)

//routes.get('/admin/users', UserController.list) // Mostrar a lista de usuários cadastrados
//routes.post('/admin/users', UserController.post) // Cadastrar um usuário
//routes.get('/admin/users/create', UserController.create) // Mostrar o formulário de criação de um usuário
//routes.put('/admin/users/:id', UserController.put) // Editar um usuário
//routes.get('/admin/users/:id/edit', UserController.edit) // Mostrar o formulário de edição de um usuário
//routes.delete('/admin/users/:id', UserController.delete) // Deletar um usuário

module.exports = routes
const express = require('express')
const routes = express.Router()

const recipes = require('../app/controllers/recipes')
const chef = require('../app/controllers/chefs')

//website - visit
routes.get("/", recipes.home)
routes.get("/Receitas", recipes.recipes)
routes.get("/Sobre", recipes.about)
routes.get("/Receitas/:id", recipes.recipe)
routes.get("/Resultados", recipes.results)
routes.get("/Chefs", chef.chefs)

module.exports = routes

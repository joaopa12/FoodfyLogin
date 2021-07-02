const express = require('express')
const routes = express.Router()

const RecipesController = require('../app/controllers/recipes')
const ChefController = require('../app/controllers/chefs')

const recipes = require("./recipes")
const chefs = require("./chefs")

routes.use('/Admin/Receitas', recipes)
routes.use('/Admin/Chefs', chefs)

//website - visit
routes.get("/", RecipesController.home)
routes.get("/Receitas", RecipesController.recipes)
routes.get("/Sobre", RecipesController.about)
routes.get("/Receitas/:id", RecipesController.recipe)
routes.get("/Resultados", RecipesController.results)
routes.get("/Chefs", ChefController.chefs)

module.exports = routes

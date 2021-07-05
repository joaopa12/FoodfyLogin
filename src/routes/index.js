const express = require('express')
const routes = express.Router()

const SiteController = require('../app/controllers/SiteController')

const recipes = require("./recipes")
const chefs = require("./chefs")

routes.use('/admin/Receitas', recipes)
routes.use('/admin/Chefs', chefs)

//website - visit
routes.get("/", SiteController.home)
routes.get("/Receitas", SiteController.recipes)
routes.get("/Sobre", SiteController.about)
routes.get("/Receitas/:id", SiteController.recipe)
routes.get("/Resultados", SiteController.results)
routes.get("/Chefs", SiteController.chefs)

module.exports = routes

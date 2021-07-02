const express = require('express')
const routes = express.Router()

const multer = require('../app/middlewares/multer')
const recipes = require('../app/controllers/recipes')

routes.get("/admin/Receitas", recipes.index)
routes.get("/admin/Receitas/criar", recipes.create)
routes.get("/admin/Receitas/:id", recipes.recipe_admin)
routes.get("/admin/Receitas/:id/edit", recipes.recipe_admin_edit)
routes.post("/admin/Receitas", multer.array("photos", 5),recipes.post)
routes.put("/admin/Receitas", multer.array("photos", 5),recipes.put)
routes.delete("/admin/Receitas", recipes.delete)

module.exports = routes
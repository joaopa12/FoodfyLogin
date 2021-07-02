const express = require('express')
const routes = express.Router()

const chef = require('../app/controllers/chefs')
const multer = require('../app/middlewares/multer')

routes.get("/admin/Chefs", chef.chefsAdmin)
routes.get("/admin/Chefs/criar", chef.chefsCreate)
routes.get("/admin/Chefs/:id", chef.chefAdmin)
routes.get("/admin/Chefs/:id/edit", chef.chefAdmin_edit)
routes.post("/admin/Chefs", multer.array("photos", 1),chef.post)
routes.put("/admin/Chefs", multer.array("photos", 1),chef.put)
routes.delete("/admin/Chefs", chef.delete)

module.exports = routes

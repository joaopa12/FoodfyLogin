const Recipe = require('../models/recipe')

function onlyUsers(req,res, next){
    if(!req.session.userId){
        return res.redirect('/admin/users/login')
    }
    next()
}

function forAdmin(req,res, next){
    if(req.session.isAdmin == false){
        return res.redirect('/admin/users/profile')
    }
    next()
}

function onlyAdmin(req,res, next){
    if(req.session.isAdmin == false){
        return res.render("Admin/user/show.njk", {
            error: "Somente para administradores!"
        })
    }
    next()
}

function isLoggedRedirectToUsers(req, res, next){
    if(req.session.userId) {
        if(req.session.isAdmin){   
            return res.redirect('/admin/users')
        } else {
            return res.redirect('/admin/users/profile')
        }
    }

    next()
}

async function RecipeOwner(req,res, next){
    const recipe = await Recipe.find(req.params.id)

    if(req.session.userId != recipe[0].user_id){
        return res.render("Admin/user/show.njk", {
            error: "Somente para administradores!"
        })
    }

    next()
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToUsers,
    onlyAdmin,
    forAdmin,
    RecipeOwner
}
const Recipe = require('../models/recipe')
const User = require('../models/user')

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

async function onlyAdmin(req,res, next){
    if(req.session.isAdmin == false){

        results = await User.find(req.session.userId)
        const userId = results.rows[0]

        return res.render("Admin/user/show.njk", {
            user:userId,
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
     let results = await Recipe.find(req.params.id)
     const recipe = results.rows[0]

     results = await User.find(req.session.userId)
     const userId = results.rows[0]
    
     console.log(req.session.userId)
     console.log(req.session.isAdmin)
    if(req.session.userId !== recipe.user_id && req.session.isAdmin == false){
        return res.render("Admin/user/show.njk", {
            error: "Somente para administradores!",
            user:userId
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
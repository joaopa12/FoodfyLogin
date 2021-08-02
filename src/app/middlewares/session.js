function onlyUsers(req,res, next){
    if(!req.session.userId){
        return res.redirect('/admin/users/login')
    }
    next()
}

function onlyAdmin(req,res, next){
    if(!req.session.isAdmin){
        return res.render("Admin/session/profile", {
            error: "Somente para administradores!"
        })
    }
    next()
}

function NotAdmin(req,res, next){
    if(!req.session.isAdmin){
        return res.redirect('/admin/users/profile')
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



module.exports = {
    onlyUsers,
    isLoggedRedirectToUsers,
    onlyAdmin,
    NotAdmin
}
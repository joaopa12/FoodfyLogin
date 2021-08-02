function onlyUsers(req,res, next){
    if(!req.session.userId){
        return res.redirect('/admin/users')
    }
    next()
}

function onlyUserOrAdmin(req,res, next){
    if(req.session.is_admin == false){
        return res.redirect('/admin/users')
    }
    next()
}

function isLoggedRedirectToUsers(req, res, next){
    if(req.session.userId) return res.redirect('/admin/users')

    next()
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToUsers,
    onlyUserOrAdmin
}
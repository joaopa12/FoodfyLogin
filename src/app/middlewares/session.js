function onlyAdmin(req,res, next){
    if(req.session.userId.is_admin){
        console.log('Admin')
        return res.redirect('/admin/users')
    }
    next()
}

function onlyUsers(req,res, next){
    if(!req.session.userId){
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
    onlyAdmin
}
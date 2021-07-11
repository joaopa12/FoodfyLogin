function onlyUsers(req,res, next){
    if(req.session.is_admin == false){
        return res.redirect('/users')
    }
    next()
}

module.exports = {
    onlyUsers
}
const User = require('../models/user')

function checkAllFields(body){
    const keys = Object.keys(body)

    for(key of keys){
        if(body[key] == ""){
            return{
                user:body,
                error:'Por favor, preencha todos os campos!'
            }
        }
    }
}

async function post(req, res, next){
    const fillAllFields = checkAllFields(req.body)

    if(fillAllFields){
        return res.render('Admin/user/register.njk', fillAllFields)
    }

    let { email, name } = req.body

    const user = await User.findOne({
        where:{ email },
        or:{ name }
    })

    if(user)  return res.render('Admin/user/register.njk',{
        user:req.body,
        error:"Usuário já cadastrado!"
    })

    next()
}

module.exports = {
    post
}
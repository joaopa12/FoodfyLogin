const user = require('../models/user')

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
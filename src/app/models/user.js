const db = require('../../config/db')
const { hash } = require('bcryptjs')

function createPassword(){
    const password = Math.random().toString(10)
    return password
}

module.exports = {
       async create(data){
           try{
              const query = `
              INSERT INTO users(
                   name,
                   email,
                   is_admin,
              ) VALUES ($1, $2, $3)
              RETURNING id
              ` 
           }catch(err){
              console.error(err)
           }
       }


}
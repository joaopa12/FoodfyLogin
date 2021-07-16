const db = require('../../config/db')
const { hash } = require('bcryptjs')

function createPassword(){
    const password = Math.random().toString(36).substr(2)
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
                   password
              ) VALUES ($1, $2, $3, $4)
              RETURNING id
              ` 

              const password = createPassword()

              const values = [
                  data.name,
                  data.email,
                  data.is_admin,
                  password,
              ]

              const results = await db.query(query, values)

              return results.rows[0].id
           }catch(err){
              console.error(err)
           }
       }
}
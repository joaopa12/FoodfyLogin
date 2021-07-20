const db = require('../../config/db')
const { hash } = require('bcryptjs')


function createPassword(){
    const password = Math.random().toString(36).substr(2)
    return password
}

module.exports = {
       async all(){
           return db.query(`SELECT * FROM users`)
       },
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
       },
       async find(id){
           return db.query(`SELECT users.* FROM users WHERE id = $1`, [id])
       },
       async update(data){
        try{
            const query = `
            UPDATE users SET
                name=($1),
                email=($2),
                is_admin=($3)
                WHERE id = $4

            ` 
            const values = [
                data.name,
                data.email,
                data.is_admin,
                data.id
            ]

            await db.query(query, values)
         }catch(err){
            console.error(err)
         }
       },
       async delete(id){
           return db.query(`DELETE FROM users WHERE id = $1`,[id])
       }
}
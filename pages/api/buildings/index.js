import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../db/db.config'

export default async function (req, res) {
   if (req.method === 'GET') {
       // Getting cookies
       const token = req.cookies["token"]
       if (!token) {
           res.redirect("/login")
       }
       // console.log(process.env.JWT_SEC)
       const verify = jwt.verify(token, process.env.JWT_SEC);

       if (!verify) {
           res.redirect("/login")
       }
       else{
           try {
               const results = await sql_query(
                   `SELECT full_name,  building_name, city_name, property_id 
                    FROM buildings NATURAL JOIN users`
               )

               if (results && results.length > 0) {
                   res.json(results)
               }
               else {
                   res.json({ msg: "No Buildings Found" })
               }

           } catch (error) {
               res.json({ msg: error.message })
           }
       } 
   }
}
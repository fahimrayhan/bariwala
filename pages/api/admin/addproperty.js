import jwt from "jsonwebtoken"
import 'dotenv/config'
import {sql_query} from '../../../db/db.config'


export default async function (req, res) {

    // Getting values from body
    const { title, beds, desc, area, bath, month, floor, rent, type, bachelor, pid} = req.body
    
    const date = new Date().toLocaleDateString()
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
            console.log(verify)
            
            const results = await sql_query(
                // NEW DB CODE
                `INSERT INTO apartments(title, beds, rent_per_month, type, area, baths, date, description, from_month, nth_floor, property_id, user_id, for_bachelor) 
                VALUES("${title}","${beds}","${rent}","${type}","${area}", "${bath}","${date}","${desc}","${month}","${floor}", "${pid}","${verify.id}", "${bachelor}")`
            )
            if (results) {
                res.json({msg:"Success"})
            }
            else{
                res.json({msg:"Save Failed"})
            }
        } catch (error) {
            res.json({msg: error.message})
        }
    }
}
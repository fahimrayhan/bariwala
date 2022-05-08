import jwt from "jsonwebtoken"
import 'dotenv/config'
import {sql_query} from '../../../db/db.config'

export default async function (req, res) {
    
    

    if (req.method === 'DELETE') {

        const { property } = req.query

        // Getting cookies
        const token = req.cookies["token"]
        if (!token) {
            res.redirect("/login")
        }
        // console.log(process.env.JWT_SEC)
        const verify = jwt.verify(token, process.env.JWT_SEC);

        // console.log(property)
        if (!verify) {
            res.redirect("/login")
        }
        else {
            try {
                const results = await sql_query(
                    `DELETE FROM apartments WHERE apartment_id = '${property}'`
                )
                if (results) {
                    // console.log(results)
                    res.json({ msg: "Success" })
                }
                else {
                    res.json({ msg: "Failed" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }

    if (req.method === 'GET') {
       
        const { property } = req.query
        // console.log(property)

        // res.status(200).json({ msg: "Success" })
        try {
            const results = await sql_query(
                `SELECT apartment_id, beds, description, rent_per_month, type, title, baths, area, date, from_month, for_bachelor, nth_floor, property_id, users.email, users.phone_number, users.full_name 
                FROM apartments NATURAL JOIN users
                WHERE apartments.apartment_id = '${property}'`
            )
            if (results) {
                // console.log(results)
                res.status(200).json({results})
            }
            else {
                res.json({ msg: "Failed" })
            }

        } catch (error) {
            res.json({ msg: error.message })
        }
    }

    
    
}
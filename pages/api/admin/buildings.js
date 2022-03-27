import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../db/db.config'


export default async function (req, res) {


    if (req.method === 'GET') {
        try {

            const results = await sql_query(
                `SELECT property_id, building_name, city_name, address, thana, total_floor, garage, lift, user_id FROM buildings`
            )

            if (results && results.length > 0) {
                res.status(200).json(results)
            }
            else {
                res.status(404).json({ msg: "Nothing" })
            }
            
        } catch (error) {
            res.status(404).json(error)
        }
    }


    if (req.method === 'POST') {
        // Getting values from body
        const { name, city, thana, address, storeys, lift, garage } = req.body

        // console.log(city, thana, address, storeys, lift, garage)

        // Getting cookies
        const token = req.cookies["authToken"]
        if (!token) {
            res.redirect("/login")
        }
        // console.log(process.env.JWT_SEC)
        const verify = jwt.verify(token, process.env.JWT_SEC);

        if (!verify) {
            res.redirect("/login")
        }


        else {
            try {

                const results = await sql_query(
                    `INSERT INTO buildings (building_name, city_name, address, thana, total_floor, garage, lift, user_id) 
                VALUES(
                    "${name}","${city}","${address}","${thana}","${storeys}","${lift}","${garage}","${verify.id}"
                )`
                )
                // console.log(results)
                if (results) {
                    res.json({ msg: "Success" })
                }
                else {
                    res.json({ msg: "Save Failed" })
                }
            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }
    
}
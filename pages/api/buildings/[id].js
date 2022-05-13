import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../db/db.config'

export default async function (req, res) {
    if (req.method === 'GET') {
        const {id} = req.query

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
                    `SELECT * FROM buildings WHERE property_id = "${id}"`
                )


                if (results && results.length > 0) {
                    res.json(results)
                }
                else {
                    res.json({ err: "Building Not Found" })
                }
                
            } catch (error) {
                res.json({ msg: error.message })
            }
        }

    }


    if (req.method === 'DELETE') {

        const {property_id} = req.body

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
        else {
            try {

                const results = await sql_query(
                    `DELETE FROM buildings WHERE property_id = "${property_id}"`
                )

                if (results) {
                    res.json({ msg: "Building Has Been Removed" })
                }
                else {
                    res.json({ msg: "Failed, Probably You Have Apartments Left" })
                }


            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }

    // Updating Property Details

    if (req.method === "PATCH") {
        
        const {id} = req.query
        console.log(id)

        const { name, thana, address, storeys, lift, garage } = req.body
        console.log(name, thana, address, storeys, lift, garage)

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
        else {
            try {

                const results = await sql_query(
                    `UPDATE buildings SET 
                        garage = "${garage}",
                        lift = "${lift}",
                        address = "${address}",
                        thana = "${thana}",
                        building_name = "${name}",
                        total_floor = "${storeys}"
                        WHERE property_id = ${id}`
                )

                if (results) {
                    res.json({ msg: "Success!" })
                }
                else {
                    res.json({ msg: "Failed, Please try again later" })
                }


            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }
}
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../db/db.config'

export default async function (req, res) {


    if (req.method === 'GET') {
        const { id } = req.query

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
                    `SELECT * FROM apartments WHERE apartment_id = "${id}"`
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

    // Deleting Apartments

    if (req.method === 'DELETE') {

        const { apartment_id } = req.body

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
                
                if (verify.role === 1 || verify.role === 2) {
                    const results = await sql_query(
                        `DELETE FROM apartments WHERE apartment_id = "${apartment_id}"`
                    )

                    if (results) {
                        res.json({ msg: "Apartment Has Been Removed" })
                    }
                    else {
                        res.json({ msg: "Failed, Probably You Have Tenants Left" })
                    }
                }
                else{
                    res.json({msg: "Not Permitted"})
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
            
        }
    }

    // Updating Property Details

    if (req.method === "PATCH") {

        const { id } = req.query
        console.log(id)

        const {
            title, beds, desc, bath, month, floor, rent, type, area, bachelor
        } = req.body
        console.log(title, beds, desc, bath, month, floor, rent, type, area,)

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
                    `UPDATE apartments SET 
                        beds = "${beds}",
                        description = "${desc}",
                        rent_per_month = "${rent}",
                        type = "${type}",
                        title = "${title}",
                        baths = "${bath}",
                        area = "${area}",
                        from_month = "${month}",
                        nth_floor = "${floor}",
                        for_bachelor = "${bachelor}"
                        WHERE apartment_id = ${id}`
                )

                if (results) {
                    console.log(results)
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
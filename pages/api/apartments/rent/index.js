import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../../db/db.config'
import { db } from '../../../../db/db.config'

export default async function (req, res) {

    if (req.method === 'GET') {
        // console.log(pid, owner, uid, from, to, message)

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
                    `SELECT
                    lease_id,
                    tenure_from,
                    tenure_to,
                    owner_id,
                    lease.user_id,
                    lease.apartment_id,
                    rent_per_month,
                    AREA,
                    beds,
                    baths,
                    TYPE
                    FROM lease JOIN apartments 
                    WHERE lease.apartment_id = apartments.apartment_id 
                    `
                )

                if (results && results.length > 0) {
                    res.json({ results })
                }
                else {
                    res.json({ msg: "Nothing Found!" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        } 
    }

    if (req.method === 'POST') {

        // Getting Values From Body
        const {pid, owner, uid, from, to, message} = req.body

        // console.log(pid, owner, uid, from, to, message)

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

                const results = await db.transaction().query(
                    `INSERT INTO lease (tenure_from, tenure_to, description, owner_id, user_id, apartment_id)
                    VALUES(
                        "${from}",
                        "${to}",
                        "${message}",
                        "${owner}",
                        "${uid}",
                        "${pid}"
                    )`
                ).query(
                    `UPDATE users SET parent_id = "${owner}" WHERE users.user_id = "${uid}";`
                ).commit()

                if (!results) {
                    res.json({ msg: "Failed! Try Again" })
                    
                }
                else {
                    res.json({ msg: "Successfully Booked" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }
}
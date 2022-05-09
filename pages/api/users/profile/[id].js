import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../../db/db.config'



export default async function (req, res) {

    

    if (req.method === 'UPDATE') {

        // GET USER PROFILE ID
        const {id} = req.query
        console.log(id)

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
                    `UPDATE users SET full_name = '[value-1]', password = '[value-7]', birth_date = '[value-8]',  n_id = '[value-10]', occupation = '[value-11]',  bank_acc = '[value-15]', tin_certificate = '[value-16]',  WHERE user_id = "${id}"`
                )
                // console.log(results)
                if (results) {
                    res.json({ msg: "Successfully Updated" })
                }
                else {
                    res.json({ msg: "Save Failed" })
                }
            } catch (error) {
                res.json({ msg: error.message })
            }

        }


    }
    if (req.method === "POST") {
        
    }
    if (req.method === "GET") {

        const { id } = req.query
        console.log(id)

        try {

            const results = await sql_query(
                
                `SELECT full_name, email, phone_number, registration_date, is_authenticated,  birth_date, n_id, occupation, rent_status, dues, balance, bank_acc, tin_certificate, user_name, role_id FROM users WHERE user_id = '${id}'`
                
            )
            // console.log(results)
            if (results) {
                res.json({data: results})
            }
            else {
                res.json({ msg: "Save Failed" })
            }
        } catch (error) {
            res.json({ msg: error.message })
        }
    }
    if (req.method === "PUT") {
        
    }
}
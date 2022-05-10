import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query } from '../../../db/db.config'


export default async function (req, res) {
    if (req.method == 'GET') {
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
                if (verify.role === 1) {
                    const results = await sql_query(
                        `SELECT * FROM users WHERE NOT user_id = ${verify.id} `
                    )

                    if (results && results.length > 0) {
                        res.json(results)
                    }
                    else {
                        res.json({ msg: "No User" })
                    }
                }
                else if (verify.role === 2) {
                    const results = await sql_query(
                        `SELECT * FROM users WHERE parent_id = ${verify.id} `
                    )

                    if (results && results.length > 0) {
                        res.json(results)
                    }
                    else {
                        res.json({ msg: "No User" })
                    }
                }
                else{
                    res.json({ msg: "Not Permitted"})
                }
                
            } catch (error) {
                res.json({msg: error.message})
            }
        }
    }
}
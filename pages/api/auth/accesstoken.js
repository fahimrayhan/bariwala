import jwt from "jsonwebtoken"
import 'dotenv/config'
import {
    sql_query
} from "../../../db/db.config";

export default async function (req, res) {
    // Getting cookies
    const ref_token = req.cookies["refresh_token"]

    // console.log(ref_token)

    if (!ref_token) {
        res.status(404).json({ err: "Not Found" })
    }

    else {

        // console.log(process.env.REFFRESH_SEC)

        const decode = jwt.verify(ref_token, process.env.REFFRESH_SEC);
        // console.log(decode)
        if (!decode) {
            res.status(404).json({ err: "Not Found" })
        }
        else {
            
            // console.log(decode.id)

            try {

                const results = await sql_query(
                    `SELECT * FROM users WHERE user_id ="${decode.id}" `
                )

                // console.log(results)

                if (results && results.length > 0) {
                    const authToken = jwt.sign({
                        id: results[0].user_id,
                    }, process.env.JWT_SEC, {
                        expiresIn: 60*60
                    })

                    res.json({
                        authToken,
                        "user": {
                            id: results[0].user_id,
                            full_name: results[0].full_name,
                            username: results[0].user_name,
                            email: results[0].email,
                            role: results[0].role_id,
                            parent: results[0].parent_id,
                            occupation: results[0].occupation,
                            desc: results[0].user_desc
                        }
                    })
                }
                else {
                    res.json({err: "User Not Found"})
                }

                
            } catch (error) {
                res.json({ err: error.message})
            }

        }
    }

}
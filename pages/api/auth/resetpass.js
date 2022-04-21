import jwt from "jsonwebtoken"
import 'dotenv/config'
import bcrypt from 'bcrypt'
import {
    sql_query
} from "../../../db/db.config";

export default async function (req, res) {

    if (req.method === 'GET') {
        res.json({msg:"Not Allowd"})
    }

    if (req.method === 'PATCH') {

        const {user_name, password, confirm_pass} = req.body
        // Getting cookies
        const token = req.cookies["token"]
        if (!token) {
            res.redirect("/login")
        }
        else{
            
            // console.log(process.env.JWT_SEC)
            const verify = jwt.verify(token, process.env.JWT_SEC);

            if (!verify) {
                res.redirect("/login")
            }
            else {
                try {

                    const hashedPass = await bcrypt.hash(password, 11);
                    
                    const results = await sql_query(
                        `UPDATE users SET password = "${hashedPass}" WHERE user_name = "${user_name}"`
                    )
                    
                    if (results) {
                        res.json({ msg:"Successfully Updated"})
                    }
                    else{
                        res.json({msg: "Save Failed"})
                    }

                } catch (error) {
                    res.json({ msg: error.message })
                }
            }
        }

    }
}
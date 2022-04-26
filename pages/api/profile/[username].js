import jwt from "jsonwebtoken"
import 'dotenv/config'
import {
    sql_query
} from "../../../db/db.config";

export default async function (req, res) {

    if (req.method === 'GET') {

        const { username } = req.query
        // console.log(id)
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

        

        try {
            const results = await sql_query(
                `SELECT * FROM users WHERE user_name = "${username}"`
            )


            if (results && results.length > 0) {
                res.json(results)
            }
            else{
                res.json({ err: "User Not Found" })
            }

        } catch (error) {
            res.json({ error: error.message })
        }
        
    }
    if (req.method === "PATCH") {

        const { username, full_name, occupation, about, phone, nid, bank, role, verified } = req.body
        // console.log(username, full_name, occupation, about, phone, nid, bank)
        // console.log(verified)
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
            // console.log(process.env.JWT_SEC)
            const verify = jwt.verify(token, process.env.JWT_SEC);

            if (!verify) {
                res.redirect("/login")
            }
            else{
                try {

                    // console.log(full_name, occupation, about, phone, nid, bank)
                    const results = await sql_query(
                        `UPDATE users SET full_name = "${full_name}", phone_number = "${phone}", n_id = "${nid}", occupation="${occupation}", bank_acc="${bank}", user_desc ="${about}", role_id="${role}", is_authenticated = "${verified}"   WHERE users.user_name = "${username}"`
                    )

                    if (results) {
                        res.json({msg:"Profile Updated"})
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
    if (req.method === "DELETE") {
        const {username} = req.body
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
            // console.log(process.env.JWT_SEC)
            const verify = jwt.verify(token, process.env.JWT_SEC);

            if (!verify) {
                res.redirect("/login")
            }
            else {
                try {

                    // console.log(full_name, occupation, about, phone, nid, bank)
                    const results = await sql_query(
                        `DELETE FROM users WHERE user_name = "${username}"`
                    )

                    if (results) {
                        res.json({ msg: "User Has Been Removed"})
                    }
                    else {
                        res.json({ msg: "Failed" })
                    }


                } catch (error) {
                    res.json({ msg: error.message })
                }
            }
        }
       
    }
}
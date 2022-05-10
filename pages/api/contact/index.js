import { sql_query } from '../../../db/db.config'
import jwt from "jsonwebtoken"
import 'dotenv/config'

export default async function (req, res) {

    if (req.method === 'POST') {

        const { name, email, msg, parent, receiver } = req.body
        console.log(name, email, msg, parent, receiver)

        if (parent === undefined) {
            try {
                const date = new Date().toLocaleDateString()
                const results = await sql_query(
                    `INSERT INTO contacts(sender_name, sender_email, msg, msg_date, receiver_email) 
                        VALUES(
                            "${name}",
                            "${email}",
                            "${msg}",
                            "${date}",
                            "${receiver}"
                        )`
                )
                if (results) {
                    res.send({ msg: "Sent" })
                }
                else {
                    res.send({ msg: "Nothing" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        }
        else if (receiver === undefined){
            try {
                const date = new Date().toLocaleDateString()
                const results = await sql_query(
                    `INSERT INTO contacts(sender_name, sender_email, msg, msg_date, reciever_id) 
                        VALUES(
                            "${name}",
                            "${email}",
                            "${msg}",
                            "${date}",
                            "${parent}"
                        )`
                )
                if (results) {
                    res.send({ msg: "Sent" })
                }
                else {
                    res.send({ msg: "Failid" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        }

        else {
            res.json({ msg: "Failed"})
        }

        // const token = req.cookies["token"]
        // if (!token) {
            
        // }
        // // console.log(process.env.JWT_SEC)
        // else{
        //     const verify = jwt.verify(token, process.env.JWT_SEC);

        //     if (!verify) {
        //         res.redirect("/login")
        //     }
        //     else {

        //         const {name, email, msg, parent} = req.body

        //         const date = new Date().toLocaleDateString()
        //         // console.log(date)

                 
        //     }
        // }

        
    }

}
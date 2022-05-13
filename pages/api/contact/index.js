import { sql_query } from '../../../db/db.config'
import jwt from "jsonwebtoken"
import 'dotenv/config'

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
        else {
            if (verify.role === 1) {
                try {

                    const results = await sql_query(
                        `
                            SELECT * FROM contacts
                        `
                    )
                    if (results && results.length > 0) {
                        res.json({results})
                    }
                    else {
                        res.json({msg: "No contacts found"})
                    }
                    
                } catch (error) {
                    res.json({msg: error.message})
                }
            }
            else if (verify.role === 2) {

                try {

                    const results = await sql_query(
                        `
                            SELECT * FROM contacts WHERE reciever_id = "${verify.id}"
                        `
                    )
                    if (results && results.length > 0) {
                        res.json({ results })
                    }
                    else {
                        res.json({ msg: "No contacts found" })
                    }

                } catch (error) {
                    res.json({ msg: error.message })
                }

            }
            else if (verify.role === 3) {
                try {

                    const results = await sql_query(
                        `
                            SELECT * FROM contacts WHERE sender_name = "${verify.full_name}"
                        `
                    )
                    if (results && results.length > 0) {
                        res.json({ results })
                    }
                    else {
                        res.json({ msg: "No contacts found" })
                    }

                } catch (error) {
                    res.json({ msg: error.message })
                }
            }
            else{
                res.json({msg: "Access Restricted"})
            }
        }
    }

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

    if (req.method == "PATCH") {
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
    }

}
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { sql_query, db } from '../../../db/db.config'


export default async function (req, res) {
    if (req.method === 'GET') {
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
                if (verify.role === 1) {
                    const results = await sql_query(
                        `SELECT * FROM payments`
                    )

                    if (results && results.length > 0) {
                        res.json(results)
                    }
                    else {
                        res.json({ msg: "No Payment Found" })
                    }
                }
                else if (verify.role === 2) {
                    const results = await sql_query(
                        `SELECT * FROM payments WHERE paid_to = "${verify.id}"
                        `
                    )

                    if (results && results.length > 0) {
                        res.json(results)
                    }
                    else {
                        res.json({ msg: "No Payment Found" })
                    }
                }
                else if (verify.role === 3) {
                    const results = await sql_query(
                        `SELECT * FROM payments WHERE paid_by = "${verify.id}"
                        `
                    )

                    if (results && results.length > 0) {
                        res.json(results)
                    }
                    else {
                        res.json({ msg: "No Payment Found" })
                    }
                }
                else {
                    res.status(404).json({ msg: "Nothing" })
                }

            } catch (error) {
                res.json({ msg: error.message })
            }
        }
    }
    if(req.method == "POST"){
        // Getting Values From body
        const {uid, owner, lid, date, trxn, amount, balance, owner_balance} = req.body
        console.log("Owener Balance: "+ owner_balance)
        console.log(uid, owner)
        

        // Adding Amount to owner 
        const newOwnerBalance = owner_balance + amount


        // Reducing Amount From User
        const newBalance = balance - amount;
        console.log("newBalance "+ newBalance)

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
                
                const results = await db.transaction().query(
                    `INSERT INTO payments(amount, date, transaction_id, paid_by, paid_to, lease_id) 
                    VALUES(
                        "${amount}",
                        "${date}",
                        "${trxn}",
                        "${uid}",
                        "${owner}",
                        "${lid}"
                    )`
                ).query(
                    `UPDATE users SET balance = "${newBalance}"  WHERE user_id = '${verify.id}'`
                ).query(
                    `UPDATE users SET balance = "${newOwnerBalance}"  WHERE user_id = '${owner}'`
                ).commit()

                if (results) {
                    res.json({ msg:"Success"})
                }
                else {
                    res.json({ msg: "Failed! Something went wrong!" })
                }
            } catch (error) {
                res.json({ msg: error.message })
            }
        }

    }
}
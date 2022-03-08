import jwt from "jsonwebtoken"
import 'dotenv/config'
import {sql_query} from '../../../../db/db.config'

export default async function (req, res) {

    const { property} = req.query
    console.log(property)
    res.json({ msg: property})
    // Getting cookies
    const token = req.cookies["authToken"]
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
            const results = await sql_query(
                `DELETE * FROM apartments WHERE ap_id =${propertyId}`
            )
            if (results) {
                res.json({msg:"Success"})
            }
            else{
                res.json({ msg:"Failed"})
            }

        } catch (error) {
            res.json({msg: error.message})
        }
    }
}
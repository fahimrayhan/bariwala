import {sql_query} from '../../../db/db.config'

export default async function (req, res) {
        try {
            const results = await sql_query(
                `SELECT ap_id, ap_name, beds, rent_per_month, type, baths, description, from_month, nth_floor FROM apartments`
            )
            if (results && results.length > 0) {
                res.status(200).json(results)
            }
            else{
                res.send({ msg: "Nothing" })
            }
            
        } catch (error) {
            res.json({err:error.message})
        }
}
import { sql_query } from "../../../db/db.config";


export default async function handler(req, res) {

    let results = await sql_query(`SELECT * FROM users`)

    res.send(results);
}
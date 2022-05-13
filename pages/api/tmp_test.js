import { sql_query } from "../../db/db.config";


export default async function handler(req, res) {

    const { tmp_id, tmp_title,tmp_body} = req.body;
    const date = new Date().toLocaleDateString()

    const results = await sql_query(
        `
        INSERT INTO tmp_table(tmp_id, tmp_title, tmp_body, tmp_date) 
        VALUES ('${tmp_id}','${tmp_title}', '${tmp_body}','${date}')
        `
    )
    if (results) {
        res.json({ msg: "Tmp Test Successful" })
    }
    else{
        res.json({ msg:"Tmp test Faild, Please Try Again"})
    }
    // res.json({name:name,email:email,phone:phone,birthdate})
}
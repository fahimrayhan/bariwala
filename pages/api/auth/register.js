import { sql_query } from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'


export default async function handler(req, res) {

    const { name, username, email, phone, birthdate, pass1, pass2, role, parent_id, nid } = req.body;

    // console.log(name, username, email, phone, birthdate, pass1, pass2)
    console.log(parent_id)

    const isValid = valid(name, email, pass1, pass2)
    const date = new Date().toLocaleDateString()
    if (!isValid) {
        const hashedPass = await bcrypt.hash(pass2, 11);

        if (parent_id) {
            const results = await sql_query(
                // NEW DB CODE
                `INSERT INTO users(full_name, user_name, email, phone_number, password, registration_date, birth_date, role_id, is_authenticated, parent_id) 
            VALUES('${name}', '${username}', '${email}','${phone}','${hashedPass}','${date}','${birthdate}', ${role},'0', '${parent_id}')`
            )
            if (results) {
                res.json({ msg: "Successfully Registerd" })
            }
            else {
                res.json({ msg: "Regestration Faild, Please Try Again" })
            }
        }
        else{
            if (nid) {
                const results = await sql_query(
                    // NEW DB CODE
                    `INSERT INTO users(full_name, user_name, email, phone_number, password, registration_date, birth_date, role_id, is_authenticated, n_id) 
                    VALUES('${name}', '${username}', '${email}','${phone}','${hashedPass}','${date}','${birthdate}', ${role},'0', '${nid}')`
                )
                if (results) {
                    res.json({ msg: "Successfully Registerd" })
                }
                else {
                    res.json({ msg: "Regestration Faild, Please Try Again" })
                }
            }
            else {
                const results = await sql_query(
                    // NEW DB CODE
                    `INSERT INTO users(full_name, user_name, email, phone_number, password, registration_date, birth_date, role_id, is_authenticated) 
                    VALUES('${name}', '${username}', '${email}','${phone}','${hashedPass}','${date}','${birthdate}', ${role},'0')`
                )
                if (results) {
                    res.json({ msg: "Successfully Registerd" })
                }
                else {
                    res.json({ msg: "Regestration Faild, Please Try Again" })
                }
            }
        }
    }
    else {
        res.json({ msg: isValid });
    }

    // res.json({name:name,email:email,phone:phone,birthdate})
}
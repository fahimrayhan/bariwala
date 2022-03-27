import { sql_query } from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'


export default async function handler(req, res) {

    const { name, username, email, phone, birthdate, pass1, pass2 } = req.body;


    const isValid = valid(name, email, pass1, pass2)
    const date = new Date().toLocaleDateString()

    if (!isValid) {
        const hashedPass = await bcrypt.hash(pass2, 11);
        const results = await sql_query(
<<<<<<< HEAD
            `
            INSERT INTO Users(user_id, full_name, email, phone_number, password, birth_date, is_authenticated, role_id) 
            VALUES ('${username}','${name}', '${email}','${phone}','${hashedPass}','${birthdate}', '${0}', '${4}')
            `
=======

            // OLD DB CODE
            // `INSERT INTO users(u_name, u_mail, u_phone, u_pass, u_reg_date, u_birth_date, role_id, is_auth) 
            // VALUES ('${name}', '${email}','${phone}','${hashedPass}','${date}','${birthdate}', '${4}','${0}')`


            // NEW DB CODE
            `INSERT INTO users(full_name, user_name, email, phone_number, password, registration_date, birth_date, role_id, is_authenticated) 
            VALUES('${name}', '${username}', '${email}','${phone}','${hashedPass}','${date}','${birthdate}', '4','0')`
>>>>>>> fahim
        )
        if (results) {
            res.status(200).json({ msg: "Successfully Registerd" })
        }
        else {

            res.json({ msg: "Regestration Faild, Please Try Again" })
        }

    }
    else {
        res.json({ msg: isValid });
    }
    // res.json({name:name,email:email,phone:phone,birthdate})
}


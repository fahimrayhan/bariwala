import { sql_query } from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'


export default async function handler(req, res) {

    const { username, name, email, phone, birthdate, pass1, pass2 } = req.body;
    const isValid = valid(name, email, pass1, pass2)
    //const date = new Date().toLocaleDateString()

    if (!isValid) {
        const hashedPass = await bcrypt.hash(pass2, 11);

        const totalUsers = await sql_query(
            `
            select count(user_id) as t_user_id from Users
            `
        )
        //console.log(totalUsers[0].t_user_id)

        const results = await sql_query(
            `
            INSERT INTO Users(user_id, user_name, full_name, email, phone_number, password, birth_date, role_id) 
            VALUES ('${totalUsers[0].t_user_id}','${username}','${name}', '${email}','${phone}','${hashedPass}','${birthdate}', '${4}')
            `
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


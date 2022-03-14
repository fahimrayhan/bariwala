import { sql_query } from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'


export default async function handler(req, res) {

<<<<<<< HEAD
    const { username, name,email,phone,birthdate,pass1,pass2} = req.body;
    const isValid = valid(name, email, pass1, pass2);
    //const date = new Date().toLocaleDateString();
    if (!isValid) {
        const hashedPass = await bcrypt.hash(pass2,11);

=======
    const { name, email, phone, birthdate, pass1, pass2 } = req.body;
    const isValid = valid(name, email, pass1, pass2)
    const date = new Date().toLocaleDateString()

    if (!isValid) {
        const hashedPass = await bcrypt.hash(pass2, 11);
>>>>>>> 95a3151e42d7763dfdd3dab39b0fb94903953383
        const results = await sql_query(
            `
            INSERT INTO Users(user_id, full_name, email, phone_number, password, birth_date, is_authenticated, role_id) 
            VALUES ('${username}','${name}', '${email}','${phone}','${hashedPass}','${birthdate}', '${0}', '${4}')
            `
        )
        if (results) {
            res.status(200).json({ msg: "Successfully Registerd" })
        }
<<<<<<< HEAD
        else{
            res.status(401).json({ msg:"Regestration Faild, Please Try Again"})
        }
    }
    else{
        res.json({ msg: isValid });
    }

=======
        else {

            res.json({ msg: "Regestration Faild, Please Try Again" })
        }

    }
    else {
        res.json({ msg: isValid });
    }
>>>>>>> 95a3151e42d7763dfdd3dab39b0fb94903953383
    // res.json({name:name,email:email,phone:phone,birthdate})
}


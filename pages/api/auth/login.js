import {
    sql_query
} from "../../../db/db.config";
import valid from "../../../utils/validate"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import 'dotenv/config'
import cookie from 'cookie'




export default async function handler(req, res) {

    // Getting email and pass from body
    const {
        email,
        pass
    } = req.body;
    

    // Checking validity of email and pass
    const isValid = valid(email, email, pass, pass);

    if (!isValid) {
        // TryCache Incase Any Error Occur
        try {
            // Checking user exist or not
            const results = await sql_query(
<<<<<<< HEAD
                `SELECT * FROM Users WHERE email ="${email}" `
            )
            const results_2 = await sql_query(
                `SELECT * FROM Roles WHERE user_id = (SELECT user_id FROM Users WHERE email ="${email}")`
=======
                `SELECT * FROM users WHERE email ="${email}" `
>>>>>>> fahim
            )
            // If User exists
            if (results && results.length > 0) {

                // Checking password matched or not
                const isValidPass = await bcrypt.compare(pass, results[0].password)
<<<<<<< HEAD
=======

>>>>>>> fahim

                if (isValidPass) {
                    // Token Generation
                    const token = jwt.sign({
<<<<<<< HEAD
                        username: results[0].user_id,
                        role: results_2[0].role_id
=======
                        id: results[0].user_id,
                        username: results[0].user_name,
                        role: results[0].role_id,
                        parent: results[0].parent_id
>>>>>>> fahim
                    }, process.env.JWT_SEC, {
                        expiresIn: '1h'
                    })

                   

                    // Generating Cookies
                    const serialize = cookie.serialize('authToken', token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "strict",
                        maxAge: 60 * 60,
                        path: '/'
                    })


                    //Storing Cookies
                    res.setHeader('Set-Cookie', serialize)


                    // Redirect
                    // res.status(200).redirect("http://localhost:3000/admin/")

                    // Token Gen Successfull
                    res.status(200).json({
                        "access-token": token,
                        "msg": "Login Successfull"
                    })
                }
                // If Password Does not match
                else {
                    res.status(401).json({
                        msg: "Authentication Error!"
                    })
                }
            }
            // If User Does Not Exist
            else {
                res.status(401).json({
                    msg: "Authentication Failed!"
                })
            }
        } catch (error) {
            res.json({ msg: error.message })
        }

    }
    // if not valid email/pass then error
    else {
        res.json({
            msg: isValid
        })
    }
}
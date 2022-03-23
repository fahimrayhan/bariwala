
import cookie from 'cookie'


export default async function (req, res) {

    const ck = cookie.serialize('authToken','loggedout',{
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 0,
        path: '/'
    })

    res.setHeader('Set-Cookie', ck)
    res.status(200).json({msg:"Successfully Logged out"})
}
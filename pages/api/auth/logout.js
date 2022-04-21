
import cookie from 'cookie'


export default async function (req, res) {

    const ck = cookie.serialize('token','loggedout',{
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 0,
        path: '/'
    })

    // const reff = cookie.serialize('refresh_token', 'loggedout', {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "strict",
    //     maxAge: 0,
    //     path: '/'
    // })

    res.setHeader('Set-Cookie', ck)
    // res.setHeader('Set-Cookie', reff)
    res.status(200).json({msg:"Successfully Logged out"})
}
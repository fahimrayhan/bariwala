import SideNav from './SideNav'
import Style from '../styles/Nav.module.css'
import { useEffect, useState } from 'react'

const AuthLayout = ({children}) => {


    const [cookie, setCookie] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/api/auth/cookies").then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setCookie(data)
                    setLoading(false)
                })
            }
            else {
                setLoading(false)
            }
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    else{
        return (
            <div className={Style.authLayout}>
                <div className={Style.sideNav}>
                    <SideNav data={cookie} />
                </div>
                <div className="p-2">
                    {children}
                </div>
            </div>
        )
    }
}

export default AuthLayout
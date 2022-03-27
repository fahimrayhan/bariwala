import NavBar from "./NavBar"
import Footer from "./Footer"
import {useEffect, useState} from 'react'

const Layout = ({children}) => {

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
            else{
                setLoading(false)
            }
        })
    }, [])

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    else{
        return(
            <div>
                <NavBar data={cookie} />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout
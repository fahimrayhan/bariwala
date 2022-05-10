import {useEffect, useState, useContext} from 'react'
import {useRouter} from 'next/router'
import { DataContext } from '../../../store/GlobalState'
import AuthLayout from '../../../components/AuthLayout'
import RentCards from '../../../components/RentCards'

const Rents = () => {

    const router = useRouter()
    const { rent } = router.query
    const [data, setData] = useState([])

    const {state} = useContext(DataContext)
    const {auth} = state

    useEffect(() => {
        if (!auth) {
            return
        }
        else{
            // console.log(auth.user.id)
            fetch(`/api/apartments/rent/${auth.user.id}`).then((response) => {
                response.json().then(data => {
                    // console.log(data)
                    setData(data);
                    localStorage.setItem("rent", JSON.stringify(data))
                })
            })
        }
    }, [])
    
    if (!data) {
        return (
            <div>Loading...</div>
            )
        
    }
    else {
        return (
                    <div className="row">
                        <RentCards />
                    </div>

        )
    }
}
 
export default Rents;

Rents.getLayout = function getLayout(page) {
    return(
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
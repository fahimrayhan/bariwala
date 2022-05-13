import AuthLayout from "../../../../components/AuthLayout";
import { useState, useEffect, useContext } from 'react'
import {useRouter} from 'next/router'
import { DataContext } from "../../../../store/GlobalState";



const MakePayment = () => {
    const {state} = useContext(DataContext)
    const {auth} = state

    const [apartments, setApartments] = useState([])
    const [rents, setRents] = useState([])
    const router = useRouter()
    

    useEffect(() => {
        if (!router.isReady) {
          return
        }
        else{
            const { id } = router.query
            fetch(`/api/apartments/rent/${id}`).then((response) =>
                response.json().then(data => {
                    setApartments(data)
                    console.log(data)
                })
            )
        }
    }, [router.isReady])

    useEffect(() => {
      
    }, [])
    

    const handleChange = (lease) => {
        console.log(lease)
        const data = apartments.filter(item => item.lease_id == lease)
        if (data) {
            setRents(data)
        }
    }
    
    

    if (!apartments) {
        return(
            <div>Please Book Some Apartments First!</div>
        )
    }
    else{
        return (
            <div className="payment">
                <h2>Make Payment</h2>
                <div className="form">
                    <form>
                        <label htmlFor="apartment" className="form-label">Select Apartment:</label>
                        <select className="form-select" id="apartment" onChange={(e) => {
                            handleChange(e.target.value)
                        }}>
                            {
                                apartments.map((apartment,key) =>{
                                    return (
                                        <option key={key} value={apartment.lease_id}>
                                            {apartment.title}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {
                            rents && rents.length > 0 ? rents.map((rent,key) =>{
                                return (
                                    <div className="form-group" key={key}>
                                        <label htmlFor="lid" className='form-label mt-3'>Lease ID: </label>
                                        <input type="number" name="lid" id="lid" value={rent.lease_id} className="form-control" disabled/>
                                        <label htmlFor="amount" className='form-label mt-3'>Amount: </label>
                                        <input type="number" name="amount" id="amount" value={rent.rent_per_month} className="form-control" disabled/>
                                        <label htmlFor="uid" className='form-label mt-3'>Paid By: </label>
                                        <input type="text" name="uid" id="uid" value={auth.user.full_name} className="form-control" disabled/>
                                        <label htmlFor="uid" className='form-label mt-3'>Paid To: </label>
                                        <input type="text" name="uid" id="uid" value={rent.owner_id} className="form-control" disabled/>
                                        <label htmlFor="trxn" className='form-label mt-3'>Transaction ID: </label>
                                        <input type="text" name="lid" id="trxn" className="form-control" required placeholder="5IJjkOL"/>
                                    </div>
                                )
                            })
                            : <div></div>
                        }
                        <div className="mt-3 text-center">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MakePayment;

MakePayment.getLayout = function getLayout(page) {
    return ( 
        <AuthLayout>
            {page}
        </AuthLayout>
    );
}
import AuthLayout from "../../../../components/AuthLayout";
import { useState, useEffect, useContext } from 'react'
import {useRouter} from 'next/router'
import { DataContext } from "../../../../store/GlobalState";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MakePayment = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth, balance} = state

    const [apartments, setApartments] = useState([])
    const [rents, setRents] = useState([])
    const [parent, setParent] = useState([])
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
     

    const handleChange = (lease) => {
        console.log(lease)
        const data = apartments.filter(item => item.lease_id == lease)

        if (data) {

            setRents(data)
        }
    }
    
    const handleSubmit = async event => {

        event.preventDefault()
        const owner = event.target.owner.value;
        fetch(`/api/users/profile/${owner}`).then((response) =>{
            response.json().then(data =>{
                setParent(data.data[0])
                // console.log(data.data[0])
            })
        })
        
        // console.log("Parent " + parent.balance)

        const date = new Date().toLocaleDateString();

        const res = await fetch(
            '/api/payment/',
            {
                body: JSON.stringify({
                    lid: event.target.lid.value,
                    amount: event.target.amount.value,
                    trxn: event.target.trxn.value,
                    owner: event.target.owner.value,
                    uid: auth.user.id,
                    date: date,
                    balance: balance.balance,
                    owner_balance: parent.balance
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const results = await res.json()
        if (res.msg === 'success') {
            // console.log(balance.balance)
            const newBalance = balance.balance - event.target.amount.value;
            // console.log("new val " + newBalance)
            dispatch({type: 'BALANCE', payload: newBalance})
            dispatch({type:"AUTH", payload: results})
            
        }
        toast(JSON.stringify(results.msg));
        setTimeout(() => {
            window.location.reload(false);
        }, 3000);
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
                    <form onSubmit={handleSubmit}>
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
                                        <label htmlFor="owner" className='form-label mt-3'>Paid To: </label>
                                        <input type="text" name="owner" id="owner" value={rent.owner_id} className="form-control" disabled/>
                                        <label htmlFor="trxn" className='form-label mt-3'>Transaction ID: </label>
                                        <input type="text" name="trxn" id="trxn" className="form-control" required placeholder="5IJjkOL"/>
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
                <ToastContainer/>
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
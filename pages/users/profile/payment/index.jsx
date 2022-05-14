import AuthLayout from "../../../../components/AuthLayout";
import {useState, useEffect} from 'react'
const Payments = () => {

    const [payments, setpayments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/payment").then((response) => {
            response.json().then(data => {
                if (data) {
                    setpayments(data)
                    console.log(data)
                    setLoading(false)
                }
                else {
                    return
                }
            })
        })
    }, [])

    if (loading) {
        <div className="payments mt-3">
            <p>Loading...</p>
        </div>
    }

    return(
        <div className="message mt-3">
            <h2 className="mb-3">Payment Records</h2>
            {
                payments && payments.length > 0 ? payments.map((item, key) => {
                    return (
                        <div className="card mb-3 text-center" key={key}>
                            <div className="card-header">
                                Payment ID: {item.payment_id}
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Amount: {item.amount}</p>
                                    <p>Transaction ID: {item.transaction_id}</p>
                                    <p>Payment Date: {item.date}</p>
                                    <footer className="blockquote-footer">Sender: {item.paid_by}<cite title="Source Title"></cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    )
                }) : <div>No Payment Records Found!</div>
            }
        </div>
    )
}
 
export default Payments;

Payments.getLayout = function getLayout(page) {
    return ( 
        <AuthLayout>
            {page}
        </AuthLayout>
    );
}
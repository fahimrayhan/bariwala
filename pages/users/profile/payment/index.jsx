import AuthLayout from "../../../../components/AuthLayout";
import {useState, useEffect} from 'react'
const Payments = () => {

    const [payments, setpayments] = useState([])

    useEffect(() => {
        fetch("/api/payments/").then((response) => {
            response.json().then(data => {
                if (data) {
                    setpayments(data.results)
                    // console.log(data.results)
                }
                else {
                    return
                }
            })
        })
    }, [])

    if (!payments) {
        <div className="payments mt-3">
            No Payment Records were found.
        </div>
    }

    return(
        <>Hello</>
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
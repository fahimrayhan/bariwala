import { useContext } from "react";
import AuthLayout from "../../../../components/AuthLayout";
import { DataContext } from "../../../../store/GlobalState";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const Complains = () => {

    const {state} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const {id} = router.query

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(
            '/api/contact/',
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    msg: event.target.msg.value,
                    parent: id
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
    }


    if (!auth) {
        return(
            <div>Loading...</div>
        )
    }
    else{
        return (
            <div>
                <h1 className='text-center mt-5'>Write Your Complains Here</h1>
                <form className='mx-auto' style={{ maxWidth: "460px" }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input type="text" name="name" id="name" className='form-control' value={auth.user.full_name} disabled/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input type="email" name="email" className='form-control' id="email" value={auth.user.email} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="msg" className='form-label'>Write Your Message Here:</label>
                        <textarea className="form-control" id="msg" required></textarea>
                    </div>
                    <div className="my-3 text-center">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
                <ToastContainer/>
            </div>
        );
    }
    
}
 
export default Complains;

Complains.getLayout = function getLayout(page) {
    return(
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
import AuthLayout from "../../../components/AuthLayout";
import { useState, useEffect, useContext } from "react";
import {useRouter} from 'next/router';
import { DataContext } from "../../../store/GlobalState";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Rent = () => {

    const router = useRouter()

    const {state} = useContext(DataContext)
    const {auth} = state
    // console.log(auth.user)

    const {rent} = router.query
    console.log(rent)

    const [data, setData] = useState([])

    let name;
    if (auth.user) {
      name = auth.user.full_name;
    }

    useEffect(() => {
      if (!rent) {
        return
      }
      else{
        fetch(`/api/apartments/${rent}`).then((response) => {
            response.json().then(data => {
              setData(data[0])
              // setLoading(false)
              console.log(data[0])
            })
          })
      }
    }, [rent])

    useEffect(() => {
      
    }, [name])
    
    

    const handleSubmit = async(event) => {
        event.preventDefault()
        const res = await fetch(
          '/api/apartments/rent/',
          {
            body: JSON.stringify({
              pid: event.target.pid.value,
              owner: event.target.owner.value,
              uid: auth.user.id,
              from: event.target.from.value,
              to: event.target.to.value,
              message: event.target.message.value,
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


    if (!data && !auth) {
      return <div>Loading...</div>
    }
    return (
      <div className="Rent">
        <div className="form d-flex flex-column justify-content-center align-items-center mt-5">
          <form className="w-50" onSubmit={handleSubmit}>
            <label htmlFor="pid" className="form-label">Property ID: </label>
            <input type="text" name="pid" id="pid" className="form-control" disabled value={data.apartment_id}/>
            <label htmlFor="owner" className="form-label">Owener ID: </label>
            <input type="text" name="owner" id="owner" className="form-control" disabled value={data.user_id}/>
            {
              name? <>
                <label htmlFor="uid" className="form-label">User Name: </label>
                <input type="text" name="uid" id="uid" className="form-control" disabled value={name} />
              </> : <div></div>
            }
            <label htmlFor="from" className="form-label">From Month: </label>
            <input type="date" name="from" id="from" className="form-control" required />
            <label htmlFor="to" className="form-label">To Month: </label>
            <input type="date" name="to" id="to" className="form-control" required />
            <label htmlFor="message" className="form-label">Any Messege? </label>
            <textarea name="message" id="message" className="form-control"></textarea>
            <div className="button text-center mt-3">
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    );
}
 
export default Rent;

Rent.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
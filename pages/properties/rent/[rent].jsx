import AuthLayout from "../../../components/AuthLayout";
import { useState } from "react";

const Rent = () => {

    const handleSubmit = async(event) => {
        event.preventDefault()
        const res = await fetch(
          '',
          {
            body: JSON.stringify({
              pid: event.target.pid.value,
              owner: event.target.owner.value,
              uid: event.target.uid.value,
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


    return ( 
        <div className="Rent">
            <div className="form d-flex flex-column justify-content-center align-items-center mt-5">
                <form className="w-50" onSubmit={handleSubmit}>
                    <label htmlFor="pid" className="form-label">Property ID: </label>
                    <input type="text" name="pid" id="pid" className="form-control" disabled />
                    <label htmlFor="owner" className="form-label">Owener ID: </label>
                    <input type="text" name="owner" id="owner" className="form-control" disabled />
                    <label htmlFor="uid" className="form-label">User ID: </label>
                    <input type="text" name="uid" id="uid" className="form-control" disabled />
                    <label htmlFor="from" className="form-label">From Month: </label>
                    <input type="date" name="from" id="from" className="form-control"  required/>
                    <label htmlFor="to" className="form-label">To Month: </label>
                    <input type="date" name="to" id="to" className="form-control"  required/>
                    <label htmlFor="message" className="form-label">Any Messege? </label>
                    <textarea name="message" id="message" className="form-control"></textarea>
                    <div className="button text-center mt-3">
                         <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
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
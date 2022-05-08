import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const EditBuilding = ({data}) => {

    const [lift, setLift] = useState("")
    const [garage, setGarage] = useState("")

    

    const handleUpdate = async (event) => {
        event.preventDefault()
        const res = await fetch(
            `/api/buildings/${data.property_id}`,
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    thana: event.target.thana.value,
                    address: event.target.address.value,
                    storeys: event.target.storeys.value,
                    lift: lift,
                    garage: garage,

                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH'
            }
        )
        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
    }
    
    return (
        <>
            <h1>Update Building Information</h1>
            <div>
                <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleUpdate}>


                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Building Name</label>
                        <input type="text" className="form-control" id="name" defaultValue={data.building_name} />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <Select
                            id="city"
                            defaultValue={data.city_name}
                            onChange={setCity}
                            options={cities}
                        />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="thana" className="form-label">Thana</label>
                        <input type="text" className="form-control" id="thana" defaultValue={data.thana}/>
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea id="address" className="form-control" defaultValue={data.address}></textarea>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="storeys" className="form-label">Storeys</label>
                        <input type="number" className="form-control" id="storeys" placeholder="5" defaultValue={data.total_floor} />
                    </div>

                    {/* Radio Buttons */}
                    <div className="mb-3 text-center">
                        <fieldset onChange={(e) => {
                            setLift(e.target.value)
                        }}>
                            <span className="me-2">Have Lift Facilities? </span>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="rd1" id="inlineRadio1" value="1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="rd1" id="inlineRadio2" value="0" />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mb-3 text-center">
                        <fieldset
                            onChange={(e) => {
                                setGarage(e.target.value);
                            }}
                        >
                            <span className="me-2">Garage </span>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="rd2" id="inlineRadio1" value="1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="rd2" id="inlineRadio2" value="0" />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </fieldset>
                    </div>

                    {/* Inputs Ends*/}
                    {/* Submit Buttons & Links */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary text-center">Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}
 
export default EditBuilding;
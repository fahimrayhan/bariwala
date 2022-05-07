import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Select from 'react-select';

const EditBuilding = ({data}) => {

    console.log(data)

    const [city, setCity] = useState(data.city_name)
    const [lift, setLift] = useState(data.lift)
    const [garage, setGarage] = useState(data.garage)

    const cities = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Sylhet', label: 'Sylhet' },
        { value: 'Rajshahi', label: 'Rajshahi' },
        { value: 'Mymenshingh', label: 'Mymenshingh' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Gazipur', label: 'Gazipur' },
        { value: 'Narayanganj', label: 'Narayanganj' },
        { value: 'Comilla', label: 'Comilla' },
        { value: 'Rangpur', label: 'Rangpur' },
    ];

    const handleUpdate = async (event) => {
        event.preventDefault()
        const res = await fetch(
            '/api/admin/buildings/',
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    city: city.value,
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
            <h1>Add Building Information</h1>
            <div>
                <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleUpdate}>


                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Building Name</label>
                        <input type="text" className="form-control" id="name" placeholder="ABC Villa" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <Select
                            id="city"
                            defaultValue={"City"}
                            onChange={setCity}
                            options={cities}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="thana" className="form-label">Thana</label>
                        <input type="text" className="form-control" id="thana" placeholder="Thana" required />
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea id="address" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="storeys" className="form-label">Storeys</label>
                        <input type="number" className="form-control" id="storeys" placeholder="5" required />
                    </div>

                    {/* Radio Buttons */}
                    <div className="mb-3 text-center">
                        <fieldset onChange={(e) => {
                            setLift(e.target.value);
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
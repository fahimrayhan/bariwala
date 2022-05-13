import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const EditApartment = ({ data }) => {

    console.log(data)
    const [bachelor, setBachelor] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(
            `/api/apartments/${data.apartment_id}`,
            {
                body: JSON.stringify({
                    title: event.target.title.value,
                    beds: event.target.beds.value,
                    desc: event.target.desc.value,
                    bath: event.target.bath.value,
                    month: event.target.month.value,
                    floor: event.target.floor.value,
                    rent: event.target.rent.value,
                    type: event.target.type.value,
                    area: event.target.area.value,
                    bachelor: bachelor
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
            <h1>Add Apartment</h1>
            <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" defaultValue={data.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="beds" className="form-label">Number of Bedrooms</label>
                    <input type="number" className="form-control" name="beds" id="beds" defaultValue={data.beds} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Descriptions</label>
                    <textarea id="desc" className="form-control" defaultValue={data.description}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="bath" className="form-label">Baths</label>
                    <input type="number" className="form-control" id="bath" defaultValue={data.baths}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="month" className="form-label">Available From Month</label>
                    <input type="date" className="form-control" id="month" defaultValue={data.from_month}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="floor" className="form-label">Which Floor?</label>
                    <input type="number" className="form-control" id="floor" defaultValue={data.nth_floor} />
                </div>
                <div className="mb-3">
                    <label htmlFor="rent" className="form-label">Rent Per Month</label>
                    <input type="number" className="form-control" id="rent" defaultValue={data.rent_per_month} />
                </div>
                <select id="type" className="form-select mb-3" aria-label="Default select example">
                    <option defaultValue={data.type}>{data.type}</option>
                    <option value="Studio">Studio</option>
                    <option value="Micro Apartment">Micro Apartment</option>
                    <option value="Loft">Loft</option>
                    <option value="Duplex">Duplex</option>
                    <option value="High-rise3">High-rise</option>
                </select>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Square Feet?</label>
                    <input type="number" className="form-control" id="area" defaultValue={data.area}/>
                </div>
                {/* Radio Buttons */}
                <div className="mb-3 text-center">
                    <fieldset onChange={(e) => {
                        setBachelor(e.target.value);
                    }}>
                        <span className="me-2">Available For Bachelors?</span>
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
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default EditApartment;
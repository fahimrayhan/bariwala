import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddApartment = () => {
    const [BD, setBD] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/api/admin/buildings').then((response) => {
            response.json().then(data => {
                setBD(data)
            })
        })
    }, [])



    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(
            '/api/admin/addproperty',
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
                    pid: event.target.pid.value,
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

    if (BD.length > 0) {
        return (
            <>
                <h1>Add Apartment</h1>
                <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="title" required placeholder="Single apartment for rent." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="beds" className="form-label">Number of Bedrooms</label>
                        <input type="number" className="form-control" name="beds" id="beds" required placeholder="0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Descriptions</label>
                        <textarea id="desc" className="form-control"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bath" className="form-label">Baths</label>
                        <input type="number" className="form-control" id="bath" required placeholder="0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="month" className="form-label">Available From Month</label>
                        <input type="date" className="form-control" id="month" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floor" className="form-label">Which Floor?</label>
                        <input type="number" className="form-control" id="floor" required placeholder="1st" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rent" className="form-label">Rent Per Month</label>
                        <input type="number" className="form-control" id="rent" required placeholder="BDT . tk" />
                    </div>
                    <select id="type" className="form-select mb-3" aria-label="Default select example">
                        <option defaultValue="Property Type">Property Type</option>
                        <option value="Studio">Studio</option>
                        <option value="Micro Apartment">Micro Apartment</option>
                        <option value="Loft">Loft</option>
                        <option value="Duplex">Duplex</option>
                        <option value="High-rise3">High-rise</option>
                    </select>
                    {
                        BD &&
                        <select id="pid" className="form-select mb-3" aria-label="Default select example" >
                            <option defaultValue="Property Type">Select Building</option>
                            {
                                BD.map((item, key) => {
                                    return (
                                        <option key={key} value={item.property_id}>{item.building_name}</option>
                                    )
                                })
                            }
                        </select>
                    }
                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Square Feet?</label>
                        <input type="number" className="form-control" id="area" required placeholder="1750" />
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary text-center">Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </>
        )
    }

    else {
        return (
            <div className="mt-2">
                <h1>Data is not available, Please Add a Building Information</h1>
            </div>
        )
    }
}
 
export default AddApartment;
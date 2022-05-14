import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApartmentList = ({data}) => {
    console.log(data)

    const handleDelete = async (id) => {
        const res = await fetch(
            `/api/apartments/${id}`,
            {
                body: JSON.stringify({
                    apartment_id: id,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
        )
        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
        // window.location.reload(false);
    }

    return (
        <div className="card w-80 m-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="img-thumbnail " alt="Property Image" />
                    </div>
                    <div className="col-md-3 m-auto">
                        <h4>{data.title}</h4>
                        <p className="fw-bold">Monthly Rent: {data.rent_per_month} Taka</p>
                        <p>{data.city_name}</p>
                    </div>
                    <div className="col-md-2 m-auto">
                        <p>{data.full_name}</p>
                    </div>
                    <div className="col-md-4 m-auto">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link href={`/admin/apartments/edit/${data.apartment_id}`}>
                                    <a className="btn btn-info">Edit</a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-danger" onClick={(e) => {
                                    handleDelete(data.apartment_id)
                                }}>Delete</button>
                            </li>
                            <li className="list-inline-item">
                                <Link href={`/admin/apartments/edit/${data.apartment_id}`}>
                                    <a className='btn btn-warning'>Archive</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ApartmentList;
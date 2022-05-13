import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuildingLists = ({data}) => {
    // console.log(data)
    const handleDelete = async (id) => {
        const res = await fetch(
            `/api/buildings/${id}`,
            {
                body: JSON.stringify({
                    property_id: id,
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

    // const handleArchive = async (id) => {
    //     const res = await fetch(
    //         `/api/buildings/${id}`,
    //         {
    //             body: JSON.stringify({
    //                 property_id: id,
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             method: 'PATCH'
    //         }
    //     )
    //     const results = await res.json()
    //     // console.log(results)
    //     toast(JSON.stringify(results.msg));
    // }

    return ( 
        <>
            <div className="card w-80 m-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="img-thumbnail w-50" alt="Property Image" />
                        </div>
                        <div className="col-md-3 m-auto">
                            <h3>{data.building_name}</h3>
                            <p>Price</p>
                            <p>{data.city_name}</p>
                        </div>
                        <div className="col-md-3 m-auto">
                            <h4>{data.full_name}</h4>
                        </div>
                        <div className="col-md-3 m-auto">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link href={`/admin/buildings/edit/${data.property_id}`}>
                                        <a className="btn btn-info">Edit</a>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-danger" onClick={(e)=>{
                                        handleDelete(data.property_id)
                                    }}>Delete</button>
                                </li>
                                {/* <li className="list-inline-item">
                                    <button className='btn btn-warning' onChange={(e) =>{
                                        handleArchive(data.property_id)
                                    }}>Archive</button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
     );
}
 
export default BuildingLists;
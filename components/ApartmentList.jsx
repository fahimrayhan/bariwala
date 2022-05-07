import Link from 'next/link';

const ApartmentList = ({data}) => {
    console.log(data)
    return (
        <div className="card w-80 m-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="img-thumbnail w-50" alt="Property Image" />
                    </div>
                    <div className="col-md-3 m-auto">
                        <h3>{data.title}</h3>
                        <p className="fw-bold">Monthly Rent: {data.rent_per_month} Taka</p>
                        <p>{data.city_name}</p>
                    </div>
                    <div className="col-md-3 m-auto">
                        <h4>{data.full_name}</h4>
                    </div>
                    <div className="col-md-3 m-auto">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link href={`/admin/apartments/edit/${data.apartment_id}`}>
                                    <a className="btn btn-info">Edit</a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href={`/admin/apartments/edit/${data.apartment_id}`}>
                                    <a className="btn btn-danger">Delete</a>
                                </Link>
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
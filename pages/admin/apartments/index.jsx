import AuthLayout from "../../../components/AuthLayout";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import ApartmentList from "../../../components/ApartmentList";

const apartments = () => {
    
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/apartments").then((response) => {
            response.json().then(data => {
                // console.log(data)
                setData(data);
                setLoading(false);
            })
        })
    }, [])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <>
                <h1>Apartments</h1>
                {/* Navigation */}
                <div className="row">
                    <div className="col-md-8">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">All Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Published</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Archived</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Link href='/admin/apartments/add-new'>
                            <a className="btn btn-info float-end  me-5">Add New</a>
                        </Link>
                    </div>
                </div>

                {/* Apartments List */}
                {
                    data.length > 0 ? data.map((value,key) =>{
                        return(
                            <ApartmentList data={value} key={key}/>
                        )
                    }):
                    <div>
                        <p className="text-center">Nothing Found! Please Add Some Apartments First</p>
                    </div>
                }
                {/* Load More Button */}
                <div className="button d-flex justify-content-center mt-2">
                    <button className="btn btn-secondary">Load More...</button>
                </div>
            </>
        );
    }
}
 
export default apartments;

apartments.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
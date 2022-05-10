import AuthLayout from "../../../components/AuthLayout";
import Link from 'next/link'
import BuildingLists from "../../../components/BuildingList";
import { useState, useEffect } from 'react';

const buildings = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/buildings").then((response) => {
            response.json().then(data => {
                // console.log(data)
                setData(data);
                setLoading(false);
            })
        })
    }, [])
    

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    else{
        return (
            <>
                <h1>Buildings</h1>
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
                        <Link href='/admin/buildings/add-new'>
                            <a className="btn btn-info float-end  me-5">Add New</a>
                        </Link>
                    </div>
                </div>

                {/* Building Lists */}
                {
                    data && data.length > 0 ? data.map((value, key) => {
                        return (
                            <BuildingLists data={value} key={key} />
                        )
                    }) : <div className="text-center">Nothing Found! Please Add Some Building First</div>
                }
                {/* Load More Button */}
                <div className="button d-flex justify-content-center mt-2">
                    <button className="btn btn-secondary">Load More...</button>
                </div>
            </>
        );
    }
}
 
export default buildings;
buildings.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
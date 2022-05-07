

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import AuthLayout from '../../../../components/AuthLayout';
import EditBuilding from "../../../../components/EditBuilding";

const BuildingEdit = () => {

    const router = useRouter()
    const {id} = router.query

    console.log(id)

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    
    

    useEffect(() => {
        fetch(`/api/buildings/${id}`).then((response) =>{
            response.json().then(data => {
                setData(data)
                // setLoading(false)
                console.log(data)
            })
        })
    }, [])
    
    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    else{
        <EditBuilding data={data}/>
    }

}
 
export default BuildingEdit;

BuildingEdit.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
// import React from "react";

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import AuthLayout from '../../../../components/AuthLayout';
import EditBuilding from "../../../../components/EditBuilding";

const BuildingEdit = () => {

    const router = useRouter()
    const {id} = router.query
    // console.log(id)


    const [data, setData] = useState([])

    

    useEffect(() => {
      if (!id) {
         console.log("Hello World") 
      }
      else{
            fetch(`/api/buildings/${id}`).then((response) => {
                response.json().then(data => {
                    setData(data[0])
                    // setLoading(false)
                })
            })
      }
    }, [id])
    
    
    if (!data) {

        return(
            <div>Loading...</div>
        )
    }
    else{
        return(
            <EditBuilding data={data} />
        )
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
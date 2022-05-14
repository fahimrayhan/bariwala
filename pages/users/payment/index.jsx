import {useState, useEffect} from 'react'

const Payments = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`/api/payment`).then((response) =>{
          response.json().then(data => {
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
        return(
            <div>
                <h2>Payments</h2>
            </div>
        )
    }
}
 
export default Payments;
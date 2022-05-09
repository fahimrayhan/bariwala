import { useState, useEffect } from "react";
import { FaBath, FaBed } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import { VscSymbolRuler } from 'react-icons/vsc'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import Link from 'next/link'

const RentCards = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const rent = localStorage.getItem('rent')
        if (rent) {
            setData(JSON.parse(rent))
            // console.log(rent)
        }
        else {
            return
        }
    }, [])

    
    if (!data) {
        return(
            <div>Loading...</div>
        )
    }

    else{
       return(
           data.map((item, key) => {
               return (
                   <div className="col-md-4" key={key}>
                       <div className="card" style={{ width: "18rem" }}>
                           <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="Rent Image" />
                           <div className="card-body">
                               <div className="card-title fs-3 text-center">{item.title}</div>
                               <div className="row">
                                   <div className="col-4"><FaBed className="fs-5 me-1" /> {item.beds}</div>
                                   <div className="col-4"><FaBath className="me-1" /> {item.baths}</div>
                                   <div className="col-4"><FiPackage /> {item.TYPE}</div>
                               </div>

                               <div className="row mt-3">
                                   <div className="col-4">
                                       <VscSymbolRuler className="fs-5 me-1" />
                                       {item.AREA}
                                   </div>
                                   <div className="col-4">
                                       <BiDollar /> {item.rent_per_month}
                                   </div>
                                   <div className="col-4">

                                   </div>
                               </div>
                               <div className="row mt-3">
                                   <div className="col-6">
                                       <AiTwotoneCalendar className="fs-5 me-1" />
                                       {item.tenure_from}
                                   </div>
                                   <div className="col-6">
                                       <AiTwotoneCalendar /> {item.tenure_to}
                                   </div>
                               </div>
                               <div className="complain text-center mt-3">
                                   <Link href={`/users/profile/complains/${item.owner_id}`}>
                                       <a className="btn btn-warning">Complain</a>
                                   </Link>
                               </div>

                           </div>
                       </div>
                   </div>
               )
           })
       )
    }

    
}
 
export default RentCards;
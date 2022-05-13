import { FaBath, FaBed, FaMale } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { BiDollar } from 'react-icons/bi'
import { VscSymbolRuler } from 'react-icons/vsc'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import Link from 'next/link'
const PropertyCard = ({data}) => {

    if (data.length > 0) {
        return ( 
                  data.map((value, key) => {
                    return (
                      <div className="col-md-3">
                        <div className="card mb-5 ms-2 p-2" style={{ width: "20rem" }} key={key}>
                          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <div className="row">
                              <div className="col-md-3">
                                <FaBed />
                                <span className='ms-1'>{value.beds}</span>
                              </div>
                              <div className="col-md-4">
                                <VscSymbolRuler />
                                <span>{value.area} sft</span>
                              </div>
                              <div className="col-md-5">
                                <BiDollar />
                                {value.rent_per_month}
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-md-3">
                                <FaBath />
                                <span className='ms-1'>{value.baths}</span>
                              </div>
                              <div className="col-md-4">
                                <FiPackage />
                                <span className='ms-1'>{value.type}</span>
                              </div>
                              {/* <div className="col-md-5">
                                <AiTwotoneCalendar />
                                <span className='ms-1'>
                                  {value.from_month}
                                </span>
                              </div> */}

                              <div className="col-md-5">
                                <FaMale/>
                                {value.for_bachelor === 1 ? <span style={{ color: 'green' }}>YES</span> : <span style={{ color: 'red' }}>NO</span>}
                              </div>
                            </div>
                            <div className="row text-center mt-3">
                              <Link href={`/properties/${value.apartment_id}`}>
                                <a className='btn btn-info'>More Details</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
         );
    }

    else{
        return(
          <div className="card mb-5 ms-2 p-2" style={{ width: "20rem" }}>
            <img src="https://www.indopropertyworld.com/Property/GetPropertyImage?imgPath=%2FAreas%2FMicro%2FTemplate%2FRadhe%20Ratnam%2Fgallery.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="row">
                <div className="col-md-6">
                  <FaBed />
                </div>
                <div className="col-md-6">
                  <BiDollar />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <FaBath />
                </div>
                <div className="col-md-6">
                  <GrLocation />
                </div>
              </div>
              <div className="row text-center mt-3">
                <button className='btn btn-info' disabled>No Details</button>
              </div>
            </div>
          </div>
        )
    }

    
}
 
export default PropertyCard;
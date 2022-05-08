import {AiOutlineMail} from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { FaBath, FaBed, FaRegBuilding, FaMale } from 'react-icons/fa'
import {BiDollar} from 'react-icons/bi'
import {VscSymbolRuler} from 'react-icons/vsc'
import {AiTwotoneCalendar} from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import PropertyCardSingle from './PropertyCardSingle'
import Link from 'next/link'

const PropertyDesc = ({data}) => {

  console.log(data.results[0], "Hello")

    return ( 
        <div className="container">
          <h2 className="title  m-4">{data.results[0].title}</h2>
          <div className="row m-3">
            <div className="col-6">
              <div className="images mb-4">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/p1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/p3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/p2.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="contents">
                <h4>Descriptions</h4>
                <p>
                  {data.results[0].description}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="details mb-3 p2">
                <h4>Property Details</h4>
                <div className="desc p-2">
                  {/* <p className="fw-bold">Type: {data.results[0].type}</p>
                  <p className="fw-bold">Area: {data.results[0].area} sqft</p>
                  <p className="fw-bold">Bed Rooms: {data.results[0].beds}</p>
                  <p className="fw-bold">Bath: {data.results[0].bath}</p>
                  <p className="fw-bold">Floor: {data.results[0].nth_floor}</p>
                  <p className="fw-bold">Rent Per Month: {data.results[0].rent_per_month}</p>
                  <p className="fw-bold">Available From: {data.results[0].from_month}</p> */}

                 <p className="fw-bold fs-6"><FiPackage/> {data.results[0].type}</p>
                  <p className="fw-bold fs-6"><VscSymbolRuler/> {data.results[0].area} sqft</p>
                  <p className="fw-bold"><FaBed/> {data.results[0].beds} Beds</p>
                  <p className="fw-bold fs-6"><FaBath/> {data.results[0].baths} Baths</p>
                  <p className="fw-bold fs-6"><FaRegBuilding/> {data.results[0].nth_floor} Floors</p>
                  <p className="fw-bold fs-6"><BiDollar/> {data.results[0].rent_per_month} Taka</p>
                  <p className="fw-bold fs-6"><AiTwotoneCalendar/> {data.results[0].from_month}</p>
                  {
                    data.results[0].for_bachelor === 1 ? <p className="fw-bold fs-5" style={{color:'green'}}><FaMale />Yes</p> : <p className="fw-bold"><FaMale />No</p>
                  }
                  
                </div>
              </div>
              <div className="contactInfo ">
                <h4>Contact This Property</h4>
                <div className="contact p-2">
                  <p>
                    <AiOutlineMail className="mx-2" />
                    {data.results[0].email}
                  </p>
                  <p>
                    <IoCallOutline className="mx-2" />
                    {data.results[0].phone_number}
                  </p>
                </div>
                <div className="rentButton">
                    <Link href={`/properties/rent/${data.results[0].apartment_id}`}>
                        <a className='btn btn-success'>Rent Now</a>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          {/* More Properties */}
         
          <div className="row">
              <div className="col-md-4">
                <PropertyCardSingle data={data.results[0]}/>
              </div>
              <div className="col-md-4">
                  <PropertyCardSingle data={data.results[0]}/>
              </div>
              <div className="col-md-4">
                  <PropertyCardSingle data={data.results[0]}/>
              </div>
          </div>
        </div>
     );
}
 
export default PropertyDesc;
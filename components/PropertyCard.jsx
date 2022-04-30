const PropertyCard = ({data}) => {

    if (data.length > 0) {
        return ( 
            data.map((value, key) => {
                return (
                  <div key={key} className="card m-2" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.ap_name}</h5>
                      <p className="card-text">{value.description.length > 80 ? value.description.substring(0, 80) + "..." : value.description}</p>
                      <div className="row">
                        <div className="col text-center">
                          <p>
                            Price: {value.rent_per_month}
                          </p>
                        </div>
                        <div className="col text-center">
                          <p>
                            Type: {value.type}
                          </p>
                        </div>
                        <div className="col text-center">
                          <p>
                            Available From: {value.from_month}
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href={`/properties/${value.apartment_id}`} className="btn btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                )
              })
         );
    }

    else{
        return(
            <div className="row p-5">
            <div className="card m-2" style={{ width: "18rem" }}>
              <img src="https://www.indopropertyworld.com/Property/GetPropertyImage?imgPath=%2FAreas%2FMicro%2FTemplate%2FRadhe%20Ratnam%2Fgallery.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">No Property Found!</h5>
                <p className="card-text">This is Demo Property</p>
                <div className="row">
                  <div className="col text-center">
                    <p>
                      Price: 0
                    </p>
                  </div>
                  <div className="col text-center">
                    <p>
                      Type: Demo
                    </p>
                  </div>
                  <div className="col text-center">
                    <p>
                      Available From: 00/00/0000
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#" className="btn btn-primary">No Details Available</a>
                </div>
              </div>
            </div>
        </div>
        )
    }

    
}
 
export default PropertyCard;
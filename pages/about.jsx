
function about() {
  return (
    <div className="container">
        <div className="card text-center m-2 p-4">
          <div className="content">
              <h1>About Us</h1>
              <img src="/logo_about.png" alt="" className="img-fluid" style={{ maxWidth: '60%'}}/>
              <p>
            Bariwala aims to provide a smart solution for landlords to manage their properties and tenants remotely. It also help tenants to find a perfect home, pay monthly rents, make complaints, and more
              </p>
              <h3 className="mt-5">Developers</h3>
              <div className="row ">
                  <div className="col-md-4">
                  <div className="card" >
                      <img src="/dev_profiles/fahim.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Fahim Rayhan</h5>
                          <p className="card-text">Fullstack Developer</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="card" >
                    <img src="/dev_profiles/feroz.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Feroz Ehsas</h5>
                          <p className="card-text">UI & UX Designer</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="card" >
                      <img src="/dev_profiles/munem.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Abdullah Al Munem</h5>
                          <p className="card-text">Database Engineer</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default about
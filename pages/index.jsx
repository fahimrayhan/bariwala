import Head from "next/head"

function index({data}) {
  return (
    <>
    <Head>
      <title>Bariwala - Find Perfect Home</title>
    </Head>
      <h1>Home</h1>
      <div className="row p-5">
        {
          data.map((value, key) =>{
            return(
              <div key={key} className="card m-2" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{value.ap_name}</h5>
                    <p className="card-text">{value.description}</p>
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
                      <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default index

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/admin/properties`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
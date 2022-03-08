import AuthLayout from '../../components/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function index({data}) {
    
  const handleDelete = async (propertyId) => {
    const res = await fetch(`http://localhost:3000/api/admin/property/${propertyId}`,{
      method: 'DELETE'
    })

    const results = await res.json()
    console.log(results)
    toast(JSON.stringify(results.msg));

  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row p-5">
        {
          data.map((value, key) => {
            return (
              <div key={key} className="card m-2" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
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
                  <div className="row">
                    <div className="col text-center">
                        <a href="#" className="btn btn-primary">Edit</a>
                    </div>
                    <div className="col text-center">
                      <button type="button"className="btn btn-danger" onClick={()=>handleDelete(value.ap_id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ToastContainer />
    </div>
    
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

index.getLayout = function getLayout(page) {
  return(
    <div>
      <AuthLayout />
      {page}
    </div>
  )
}
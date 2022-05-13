import AuthLayout from "../../components/AuthLayout";
import {useState, useEffect} from 'react';
import UserList from "../../components/UsersList";
import Link from 'next/link'

function index() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  


  useEffect(() => {
    fetch("/api/users").then((response) =>{
      response.json().then(data =>{
        // console.log(data)
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
  return (
    <div>
      <h2>All Users</h2>
      <div className="row">
        <div className="col-md-8">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">All Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Owners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tenats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Subscribers</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <Link href='/admin/add-user'>
            <a className="btn btn-info float-end  me-5">Add New</a>
          </Link>
        </div>
      </div>
      <div className="userTable">
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Verification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                data.msg? <tr>
                  <td>No User Found!</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> :
                data.map((user, key) => {
                  return (
                    <UserList user={user} key={key} />
                  )
                })
              }
          </tbody>
        </table>

      </div>
      <div className="button d-flex justify-content-center mt-2">
        <button className="btn btn-secondary">Load More...</button>
      </div>
    </div>
  )
}

export default index

index.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
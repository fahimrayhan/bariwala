import AuthLayout from '../../components/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState, useContext} from 'react'
import { DataContext } from '../../store/GlobalState';
import RentCards from '../../components/RentCards';


function index({data}) {

  const { state } = useContext(DataContext)
  const { auth } = state

  const [user, setUser] = useState([])

  useEffect(() => {
    if (!auth) {
      return
    }
    else{
      fetch(`/api/users/profile/`).then((response) =>{
        response.json().then(data => {
          setUser(data.data[0])
          console.log(data.data[0])
        })
      })
    }
  }, [])
  

  if (!user) {
    return(
      <div>Loading...</div>
    )
  }
  else{
    return(
      <div className="userInfo mt-3">
        <h3>Hello {user.full_name}</h3>
        <p>Here is some information about your profile</p>
        <div className="mt-3">
          <div>Current Bank Balance: {
            user.balance > 0 ? <span className="text-success">{user.balance}</span> : <span className="text-danger">{user.balance}</span>
            }</div>
            <div className="phone mt-2">
              Phone Number: <span>{user.phone_number}</span>
            </div>
            <div className="phone mt-2">
              Email: <span>{user.email}</span>
            </div>
        </div>
      </div>
    )
  }
  
}

export default index

// export async function getServerSideProps(auth) {
  
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/users/profile/${auth.user.id}`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

index.getLayout = function getLayout(page) {
  return(
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}
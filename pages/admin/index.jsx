import AuthLayout from '../../components/AuthLayout'

function index() {
    
    // useEffect(() => {
    //   const data = fetch('/api/admin/')
    // }, [])
    

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
    
  )
}

export default index

index.getLayout = function getLayout(page) {
  return(
    <div>
      <AuthLayout />
      {page}
    </div>
  )
}
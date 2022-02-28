
import AuthLayout from '../../components/AuthLayout'
function addapartment() {
  return (
    <div>
        <h1>Add Apartment</h1>
    </div>
  )
}

export default addapartment

addapartment.getLayout = function getLayout(page) {
  return(
    <>
      <AuthLayout/>
      {page}
    </>
  )
}
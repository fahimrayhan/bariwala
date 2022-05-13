import AuthLayout from "../../../../components/AuthLayout";
import Head from 'next/head'
import AddApartment from "../../../../components/AddApartment";

const apartments = () => {
    return ( 
        <>
            <Head>
                <title>Add New Apartment</title>
            </Head>
            <div>
                <AddApartment/>
            </div>
        </>
     );
}
 
export default apartments;

apartments.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
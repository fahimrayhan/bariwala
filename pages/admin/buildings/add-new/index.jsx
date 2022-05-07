import Head from 'next/head';
import AddBuilding from '../../../../components/AddBuilding';
import AuthLayout from '../../../../components/AuthLayout';

function addBuilding() {

    return (
        <>
            <Head>
                <title>Add Building | Bariwala</title>
            </Head>
            <div>
                <AddBuilding/>
            </div>

        </>
    )
}

export default addBuilding

addBuilding.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
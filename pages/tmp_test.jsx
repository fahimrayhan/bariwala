import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TmpTest() {

    const tmpTest = async event => {
        event.preventDefault()
        console.log(event)
        const res = await fetch(
            'api/tmp_test',
            {
                body: JSON.stringify({
                    tmp_id: event.target.tmp_id.value,
                    tmp_title: event.target.tmp_title.value,
                    tmp_body: event.target.tmp_body.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const results = await res.json()
        toast(JSON.stringify(results.msg));
    }

    return (
        <>
            <Head>
                <title>Tmp Test | Bariwala</title>
            </Head>
                <h1>Tmp Test</h1>
                <div>
                    <form className="p-5 mx-auto" style={{ maxWidth: '500px' }} onSubmit={tmpTest}>
                        {/* Inputs */}
                        <div className="mb-3">
                            <label htmlFor="tmp_id" className="form-label">Tmp ID</label>
                            <input type="text" className="form-control" id="tmp_id" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tmp_title" className="form-label">Tmp Title</label>
                            <input type="text" className="form-control" id="tmp_title" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tmp_body" className="form-label">Tmp Body</label>
                            <textarea className="form-control" id="tmp_body" required/>
                        </div>
                        {/* Inputs Ends*/}
                        {/* Submit Buttons & Links */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary text-center">Submit</button>
                        </div>
                    </form>
                    <ToastContainer/>
                </div>
        </>
    )
}

export default TmpTest
import AuthLayout from "../../../components/AuthLayout";
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import valid from '../../../utils/validate'
import 'react-toastify/dist/ReactToastify.css';
import Styles from '../../../styles/Profile.module.css'

const EditUser = () => {

    const router = useRouter()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const user = router.query
        fetch(`/api/profile/${user.user}`).then((response) => {
            response.json().then(data => {
                setData(data)
                // console.log(data)
                setLoading(false)
            })
        })
    }, [router.isReady])
    

    const updateProfile = async (event) => {
        event.preventDefault()

        if (event.target.pass.value && event.target.pass.value) {

            const { pass, c_pass } = event.target

            const validPass = valid(data[0].full_name, data[0].email, pass.value, c_pass.value)
            if (!validPass) {
                const res = await fetch(
                    '/api/auth/resetpass',
                    {
                        body: JSON.stringify({
                            user_name: data[0].user_name,
                            password: event.target.pass.value,
                            confirm_pass: event.target.c_pass.value
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'PATCH'
                    }
                )
                const results = await res.json()
                // console.log(results)
                toast(JSON.stringify(results.msg));
            }


            else {
                toast(validPass);
            }

        }
        else {
            const res = await fetch(
                `/api/profile/${data[0].user_name}`,
                {
                    body: JSON.stringify({
                        username: data[0].user_name,
                        full_name: event.target.Full_name.value,
                        occupation: event.target.occupation.value,
                        about: event.target.about.value,
                        phone: event.target.phone.value,
                        nid: event.target.nid.value,
                        bank: event.target.bank.value
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PATCH'
                }
            )
            const results = await res.json()
            // console.log(results)
            toast(JSON.stringify(results.msg));
        }
    }

    const roles = {
        1: "Admin",
        2: "Owner",
        3: "Tenant",
        4: "Subscriber",
    }

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }
    return(
        <div className={Styles.profileUpdate}>
            <h2>User Profile</h2>
            {/* Avatar */}
            <div className={Styles.avatar}>
                <img src="/img_avatar.png" alt="" />
                <div className="form-group">
                    <input type="file" name="avatar" id="avatar" accept="image/*" />
                    <input type="submit" value="Change" />
                </div>
            </div>

            <form className={Styles.form} onSubmit={updateProfile}>
                {/* Full Name */}
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="Full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="Full_name" placeholder="Full Name" defaultValue={data[0].full_name} />
                </div>
                {/* User Name */}
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" placeholder="username" disabled defaultValue={data[0].user_name} />
                </div>
                {/* Ocupation */}
                <div className="form-group mb-3">
                    <label htmlFor="occupation" className="form-label">Occupation</label>
                    <input type="text" className="form-control" id="occupation" placeholder="Your Occupation" defaultValue={data[0].occupation} />
                </div>
                {/* About */}
                <div className="form-group mb-3">
                    <label htmlFor="Full_name" className="form-label">About Yourself</label>
                    <textarea id="about" className="form-control" defaultValue={data[0].user_desc}></textarea>
                </div>
                {/* Email */}
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" disabled defaultValue={data[0].email} />
                </div>
                {/* Phone */}
                <div className="form-group mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Your Phone" defaultValue={data[0].phone_number} />
                </div>
                {/* NID */}
                <div className="form-group mb-3">
                    <label htmlFor="nid" className="form-label">NID</label>
                    <input type="text" className="form-control" id="nid" placeholder="Your NID" defaultValue={data[0].n_id} />
                </div>
                {/* Bank */}
                <div className="form-group mb-3">
                    <label htmlFor="bank" className="form-label">Bank Account</label>
                    <input type="text" className="form-control" id="bank" placeholder="Your Bank Account Number" defaultValue={data[0].bank_acc} />
                </div>
                {/* Pass */}
                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Password" />
                </div>
                {/* Confirm Pass */}
                <div className="form-group mb-3">
                    <label htmlFor="c_pass" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="c_pass" placeholder="Confirm Password" />
                </div>
                {/* Submit */}
                <div className={Styles.button}>
                    <button type="submit" className="btn btn-info">Update</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )

}
 
export default EditUser;

EditUser.getLayout = function getLayout(page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
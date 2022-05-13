import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserList = ({user}) => {


    const roles = {
        1: "Admin",
        2: "Owner",
        3: "Tenant",
        4: "Subscriber",
    }
    //console.log(user)

    const handleDelete = async (name) => {
        const res = await fetch(
            `/api/profile/${name}`,
            {
                body: JSON.stringify({
                    username: name,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
        )
        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
        window.location.reload(false);
    }
    return ( 
        <>
        <tr>
            <td><b>{user.full_name}</b></td>
            <td>{roles[user.role_id]}</td>
            <td>{user.is_authenticated ? "Verified" : "Not Verified"}</td>
            <td>
                <Link href={`/users/edit/${user.user_name}`}>
                    <a className="btn btn-primary me-3">Edit</a>
                </Link>
                <button className="btn btn-danger" onClick={(e)=>{
                    handleDelete(user.user_name)
                }}>Delete</button>
            </td>
        </tr>
            {/* <ToastContainer /> */}
        </>
     );
}
 
export default UserList;
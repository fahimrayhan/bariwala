import Link from 'next/link'

const UserList = ({user}) => {


    const roles = {
        1: "Admin",
        2: "Owner",
        3: "Tenant",
        4: "Subscriber",
    }
    console.log(user)
    return ( 
        <tr>
            <td><b>{user.full_name}</b></td>
            <td>{roles[user.role_id]}</td>
            <td>{user.is_authenticated ? "Verified" : "Not Verified"}</td>
            <td>
                <Link href={`/users/edit/${user.user_name}`}>
                    <a className="btn btn-primary me-3">Edit</a>
                </Link>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
     );
}
 
export default UserList;
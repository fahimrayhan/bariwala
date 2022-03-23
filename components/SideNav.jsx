import Link from "next/link"
import Style from '../styles/Nav.module.css'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SideNav() {

    const router = useRouter()

    const logOut = async () => {
        const res = await fetch('/api/auth/logout')

        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
        setTimeout(() => {
            if (res.status === 200) {
                router.push("/about")
            }
        }, 3000);
        
    } 

  return (
        <div className="sidBar">

            <div className={Style.profile}>
                <img src="/img_avatar.png" alt="User Avatar" className="avatar"/>
                <h3 className={Style.username}>Fahim Rayhan</h3>
                <p className={Style.descriptions}>
                    lorem ipsum dolor sit amet, consectetur adip,
                </p>
            </div>

            <nav className={Style.navBar}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/dashboard"><a>Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/add-building"><a>Add Building</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/add-apartment"><a>Add Apartment</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Posts</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Gallery</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Users</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Owners</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Payment History</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a onClick={logOut}>Log Out</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <ToastContainer />
        </div>
  )
}

export default SideNav
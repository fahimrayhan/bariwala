import Link from "next/link"
import Style from '../styles/Nav.module.css'
import { useRouter} from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'


function SideNav() {

    const { state, dispatch } = useContext(DataContext)
    const {auth} = state

    const router = useRouter()

    // console.log(user)
    // useEffect(() => {
      
    // }, [])
    

    const logOut = async () => {
        const res = await fetch('/api/auth/logout')

        const results = await res.json()
        // console.log(results)
        toast(JSON.stringify(results.msg));
        setTimeout(() => {
            Cookie.remove('refresh_token', { path: 'api/auth/accesstoken' })
            localStorage.removeItem('firstLogin')
            dispatch({
                type: 'AUTH', payload: {}
            })
            if (res.status === 200) {
                router.push('/')
            }
        }, 2000);
        
    }

    const SideNavByRoles = () =>{
        // Admin
        if (auth.user.role === 1) {
            return(
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin"><a>Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/buildings/"><a>Buildings</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/apartments/"><a>Apartments</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Posts</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Gallery</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/profile/${auth.user.username}`}><a>Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Owners</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Payment History</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/users"><a>Users</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a onClick={logOut}>Log Out</a>
                        </Link>
                    </li>
                </ul>
            )
        }
        // Owner
        if (auth.user.role === 2) {
            return(
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin"><a>Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/buildings/"><a>Buildings</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/apartments/"><a>Apartments</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Posts</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Gallery</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/profile/${auth.user.username}`}><a>Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Payment History</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/users"><a>Tenants</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a onClick={logOut}>Log Out</a>
                        </Link>
                    </li>
                </ul>
            )
        }
        // Tenants
        if (auth.user.role === 3) {
            return(
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin"><a>Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/profile/${auth.user.username}`}><a>Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a>Payment</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a onClick={logOut}>Log Out</a>
                        </Link>
                    </li>
                </ul>
            )
        }
        // Subscriber
        if (auth.user.role === 4) {
            return(
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin"><a>Dashboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/profile/${auth.user.username}`}><a>Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a onClick={logOut}>Log Out</a>
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    if (!auth.user) {
        return(
            <div>Loading</div>
        )
    }
    return (
        <div className="sidBar">

            <div className={Style.profile}>
                <img src="/img_avatar.png" alt="User Avatar" className="avatar mb-2" />
                <h3 className={Style.username}>
                    {auth.user.full_name}
                </h3>
                <p className={Style.descriptions}>
                    {auth.user.desc}
                </p>
            </div>

            <nav className={Style.navBar}>
                {
                    SideNavByRoles()
                }
            </nav>
            <ToastContainer />
        </div>
    )
}

export default SideNav
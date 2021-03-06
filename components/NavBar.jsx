import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'


function NavBar() {


    const isLoggedIn = () =>{

        const { state } = useContext(DataContext)

        const { auth } = state
        // console.log(auth.user)
     
        if (auth.user) {
            return (
                <ul className="navbar-nav">
                    < li className="nav-item" >
                        <img className="img-thumbnail" style={{ maxWidth: '40px', height: '40px', borderRadius: '50%' }} src="./img_avatar.png" alt="" />
                    </li >
                    <li className="nav-item">
                        <Link href="/admin">
                            <a className="nav-link"> Dashboard</a>
                        </Link>
                    </li>
                </ul>
            ) 
        } 
        return(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/login">
                        <a className="nav-link">Login</a>
                    </Link>
                </li>
            </ul>
        )
    }
    
    

  return (

        <nav className="navbar navbar-expand-md navbar-light bg-light nav-fill">
              <div className="container-fluid">
                  <Link href="/">
                        <a className="navbar-brand">
                            <img src="/nav_logo.png" alt="Nav Logo" style={{maxHeight:'80px'}}/>  
                        </a>
                    </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-center mx-5" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link href='/'>
                                    <a className="nav-link active" aria-current="page">Home</a>
                              </Link>
                          </li>
                          <li className="nav-item">
                                <Link href='/admin/apartments/add-new/'>
                                    <a className="nav-link">Add Apartment</a>
                                </Link>
                          </li>
                          <li className="nav-item">
                              <Link href='/find'><a className="nav-link">Find Apartment</a></Link>
                          </li>
                          <li className="nav-item">
                              <Link href='/blog/'><a className="nav-link">Blog</a></Link>
                          </li>
                          <li className="nav-item">
                              <Link href='/about'><a className="nav-link">About Us</a></Link>
                          </li>
                          <li className="nav-item">
                              <Link href='/contact'><a className="nav-link">Contact Us</a></Link>
                          </li>
                      </ul>
                  </div>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      {
                        isLoggedIn()
                      }
                  </div>
              </div>
        </nav>
       
  )
}

export default NavBar

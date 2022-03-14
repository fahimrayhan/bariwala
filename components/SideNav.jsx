import Link from "next/link"
import Style from '../styles/Nav.module.css'
function SideNav() {
  return (
            <nav>
                  <ul className="nav nav-pills flex-column mb-auto">
                      <li className="nav-item">
                          <Link href="/"><a>Home</a></Link>
                      </li>
                      <li className="nav-item">
                          <Link href="/admin/"><a>Dashboard</a></Link>
                      </li>
                      <li className="nav-item">
                          <Link href="/admin/add-apartment"><a>Add Apartment</a></Link>
                      </li>
                      <li className="nav-item">
                          <Link href="/"><a>Log Out</a></Link>
                      </li>
                  </ul>
              </nav>
  )
}

export default SideNav
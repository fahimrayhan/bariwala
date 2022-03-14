import Link from "next/link"
function SideNav() {
  return (
      
      <div className="bg-primary">
            <nav className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ maxWidth:"220px"}}>
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
        </div>

  )
}

export default SideNav
import Link from 'next/link'

function NavBar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link">Features</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link">Pricing</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link">Disabled</a>
                          </li>
                      </ul>
                  </div>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link">Login</a>
                                </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
  )
}

export default NavBar
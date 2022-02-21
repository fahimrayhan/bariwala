import NavBar from "./NavBar"

const Layout = ({children}) => {
    return(
        <div className="container-fluid">
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
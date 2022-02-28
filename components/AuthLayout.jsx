import SideNav from './SideNav'

const AuthLayout = ({children}) => {
    return (
        <>
            <SideNav />
            {children}
        </>
    )
}

export default AuthLayout
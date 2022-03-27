import SideNav from './SideNav'
import Style from '../styles/Nav.module.css'
const AuthLayout = ({children}) => {
    return (
        <div className={Style.authLayout}>
            <div className={Style.sideNav}>
                <SideNav />
            </div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
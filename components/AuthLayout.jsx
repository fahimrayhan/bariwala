import SideNav from './SideNav'
import Style from '../styles/Nav.module.css'
import { useContext, useEffect} from 'react'
import { DataContext } from '../store/GlobalState'



const AuthLayout = ({children}) => {

    const { state } = useContext(DataContext)

    const { auth } = state

    const { user } = auth
    
    // useEffect(() => {
        
    // }, [auth])
    


        // if (!user) {
        //     return <div>Loading...</div>
        // }
        // else{
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
        // }
}

export default AuthLayout
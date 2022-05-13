import {createContext, useReducer, useEffect} from 'react'
import reducers from './Reducers'
export const DataContext = createContext()

export const DataProvider = ({children}) => {
    
    const initState = {auth: {}}
    const [state, dispatch] = useReducer(reducers, initState)


    useEffect(() => {
       
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            fetch('/api/auth/accesstoken').then(response =>{
                response.json().then(
                    data => {
                        // console.log(data.err)
                        if (data.err) {
                            return localStorage.removeItem('firstLogin')
                        }
                        else {
                            dispatch({
                                type: 'AUTH', payload: {
                                    user: data.user
                                }
                            })
                        }
                    }
                )
            })
        }
    }, [])
    


    return(
        <DataContext.Provider value={{ state, dispatch}}>
            {children}
        </DataContext.Provider>
    )

}
import {createContext, useReducer, useEffect} from 'react'
import reducers from './Reducers'
export const DataContext = createContext()

export const DataProvider = ({children}) => {
    
    const initState = {auth: {}, balance:{}}
    const [state, dispatch] = useReducer(reducers, initState)
    const {auth} = state


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

                            dispatch({ type: 'BALANCE', payload: {balance: data.user.balance}})
                            return
                        }
                    }
                )
            })
        }
    }, [])
    
    const balance = (balance) => {
        
        const newBalance = auth.user.balance - balance;
        dispatch({ type: 'BALANCE', payload: newBalance })

    }

    return(
        <DataContext.Provider value={{ state, dispatch}}>
            {children}
        </DataContext.Provider>
    )

}
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'


function user() {

    const router = useRouter()
    const {uid} = router.query

    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState()
    
    useEffect(() => {
      fetch(`/api/users/profile/${uid}`).then((response) => {
          response.json().then((data) => {
            setUser(data)
            setLoading(false)
          })
      })
    }, [])
    
    if (loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    else{
        return(
            <div>Data
                {
                    console.log(user)
                }
            </div>
        )
    }
}

export default user
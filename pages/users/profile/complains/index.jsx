import { useEffect, useState } from 'react';
import AuthLayout from '../../../../components/AuthLayout'


const Complains = () => {

    const [contacts,setContacts] = useState([])

    useEffect(() => {
      fetch("/api/contact/").then((response) => {
          response.json().then(data => {
              if (data) {
                  setContacts(data.results)
                  console.log(data.results)
              }
              else{
                  return
              }
          })
      })
    }, [])
    

    if (!contacts) {
        return(
            <div className="mt-3 text-warning">No contacts found!</div>
        )
    }
    return (
        <div className="message mt-3">
            <h2>Inbox</h2>
            {
                contacts.map((item, key) =>{
                    return (
                        <div className="card mb-3" key={key}>
                            <div className="card-header">
                                Message ID: {item.contact_id}
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{item.msg}</p>
                                    <footer className="blockquote-footer">Sender: <cite title="Source Title">{item.sender_name}</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default Complains;

Complains.getLayout = function getLayout(page) {
    return(
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
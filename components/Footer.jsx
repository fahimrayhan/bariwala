import { BsFacebook, BsTwitter, BsYoutube, BsPinterest} from 'react-icons/bs'

function Footer() {
  return (
      <footer className="border-top">
          <div className="row p-5 text-white" style={{ backgroundColor: "#1C4049"}}>
              <div className="col">
                  
              </div>
              <div className="col">

              </div>
              <div className="col">
                    <div className="social">
                        <ul className="nav col-md-5 list-unstyled d-flex">
                            <li className="ms-3">
                                <BsFacebook />
                            </li>
                             <li className="ms-3">
                                <BsTwitter />
                            </li>
                            <li className="ms-3">
                                <BsYoutube />
                            </li>
                            <li className="ms-3">
                                <BsPinterest />
                            </li>
                        </ul>
                    </div>
              </div>
          </div>
          <p className="text-center mt-1"> &copy;2022 - All rights reserved | Designed and developed by Aliens</p>
      </footer>
  )
}

export default Footer
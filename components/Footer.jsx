import { BsFacebook, BsTwitter, BsYoutube, BsPinterest} from 'react-icons/bs'
import Link from 'next/link'
function Footer() {
  return (
      <footer className="border-top">
          <div className="row p-5 text-white" style={{ backgroundColor: "#1C4049"}}>
              <div className="col-md-4">
                  <div className="about">
                    <div className="logo d-flex flex-row justify-content-center align-items-center">
                        <img src="/footer_logo.png" alt="footer logo" />
                    </div>
                      <h4 className="text-center">About Bariwala</h4>
                      <p className="text-center">
                          Bariwala aims to provide a smart solution for landlords to manage their properties and tenants remotely. It also help tenants to find a perfect home, pay monthly rents, make complaints, and more...
                      </p>
                  </div>
              </div>
              <div className="col-md-4 d-flex flex-row justify-content-center align-items-center">
                    <div className="title ms-3">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link href="">
                                    <a>Contact Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Add Apartment</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Registration</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
              </div>
              <div className="col-md-4 m-auto">
                    <div className="social d-flex justify-content-center align-items-center">
                        <ul className="nav col-md-5 list-unstyled d-flex flex-row">
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
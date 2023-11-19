import React from 'react'
import "./Newsletter.scss"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdOutlineDoneAll } from 'react-icons/md'

const Newsletter = () => {

    const preventDefaultHandler = (e) =>{
        e.preventDefault()
    }
  return (

    <div className="newsletter-section">
            <div className="newsletter-content">
                <div className="newsletter-formcontet">
                    <span className="small-text">NewsLetter</span><br />
                    <span className="big-text">
                        Sign Up for latest updates and offer
                    </span>
                    <form className="form" >
                        <input type="email" name="email" placeholder="Email Address" />
                        <button onClick={(e)=>{preventDefaultHandler(e)}}>Subscribe</button>
                    </form>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <FaInstagram />
                    </div>
                    <div className="icon">
                        <FaTwitter />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
)
}

export default Newsletter

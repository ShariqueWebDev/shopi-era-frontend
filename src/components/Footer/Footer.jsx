import React from 'react'
import "./Footer.scss"
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
  return (
    <footer>
    <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt autem nihil temporibus accusantium. Doloremque, unde cum omnis ducimus at voluptatibus, dicta vero fugiat vitae.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                   
                    <div className="text"><FaLocationArrow /> 10130 Huebner Rd, San Antonio, Texas, 78240, United States</div>
                </div>
                <div className="c-item">
                  
                    <div className="text"><FaPhone /> Phone: 0 7712 3456 78</div>
                </div>
                <div className="c-item">
             
                    <div className="text"><FaEnvelope /> Email: shariques966@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">
                    <span>Headphones</span>
                    <span>Smart Wateches</span>
                    <span>Bluetooth Speakers</span>
                    <span>Wireless Earbuds</span>
                    <span>Home Theatre</span>
                    <span>Projectors</span>
                </div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">
                    <span>Home</span>
                    <span>About</span>
                    <span>Privacy Policy</span>
                    <span>Returns</span>
                    <span>Terms & Conditions</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Shopimart store 2023 created by Sharique Aslam E-commerce solution world
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer

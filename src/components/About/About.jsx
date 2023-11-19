import React from 'react'
import "./About.scss"
import marketingImg from "../../assets/about/marketing.png"
import crmImg from "../../assets/about/cms.png"
import salesImg from "../../assets/about/sales.png"
import servieImg from "../../assets/about/service.png"
import operationImg from "../../assets/about/opration.png"
import csmImg from "../../assets/about/crm.png"

const About = () => {
  return (
    <div className='about-page'>
    <div className="about-container">
            <h1>About Us</h1>
        <div className="about-content">
            <div className="about-single-content">
                <div className="first-title-and-img">
                    <div className="first-img-container">
                        <img src={crmImg} alt="" />
                    </div>
                    <h3>Our CRM Platform</h3>
                </div>
                <p className='first-summary-content'>The shopiMart CRM platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>

            </div>
            <div className="about-single-content">
                <div className="title-and-img">
                    <div className="img-container">
                        <img src={marketingImg} alt="" />
                    </div>
                    <h3>Marketing Hub</h3>
                </div>
                <p className='summary-content'>Our marketing software has everything you need to run a successful inbound marketing strategy that grows traffic, converts leads, and shows ROI.</p>

            </div>
            <div className="about-single-content">
                <div className="title-and-img">
                    <div className="img-container">
                        <img src={salesImg} alt="" />
                    </div>
                    <h3>Sales Hub</h3>
                </div>
                <p className='summary-content'>ur sales software includes a full suite of tools to boost sales productivity, shorten deal cycles, and make your sales process more human.</p>

            </div>
            <div className="about-single-content">
                <div className="title-and-img">
                    <div className="img-container">
                        <img src={servieImg} alt="" />
                    </div>
                    <h3>Service Hub</h3>
                </div>
                <p className='summary-content'>Our customer service software makes it easy to connect with customers, help them succeed, and turn them into promoters of your business.</p>

            </div>
            <div className="about-single-content">
                <div className="title-and-img">
                    <div className="img-container">
                        <img src={csmImg} alt="" />
                    </div>
                    <h3>CMS Hub</h3>
                </div>
                <p className='summary-content'>ur content management software is flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</p>

            </div>
            <div className="about-single-content">
                <div className="title-and-img">
                    <div className="img-container">
                        <img src={operationImg} alt="" />
                    </div>
                    <h3>Operation Hub</h3>
                </div>
                <p className='summary-content'>Our operations software lets you sync and curate customer data and automate business processes so your teams stay aligned, and you can adapt to the ever-changing needs of your customers.</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default About

import React from 'react'
import "./Banner.scss"
import BannerImg from "../../../assets/products/watch-prod-1.webp"
const Banner = () => {
  return (
    <div className="hero-banner">
    <div className="content">
        <div className="text-content">
            <h1>Sales</h1>
            <p>Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifent montes parturient posuere curae tempore</p>
            <div className="ctas">
                <div className="banner-cta" >Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
        </div>
        <div className="banner-img">
            <img className="banner" src={BannerImg} alt="Headphone" />
        </div>
    </div>
</div>
  )
}

export default Banner

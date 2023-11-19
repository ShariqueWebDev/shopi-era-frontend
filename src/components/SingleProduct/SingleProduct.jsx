import React, { useContext, useState } from 'react'
import "./SingleProduct.scss";
import RelatedProduct from './RelatedProduct/RelatedProduct';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaCartPlus, FaPinterest} from "react-icons/fa"
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import {Context} from "../../utils/context"
import { MdOutlineDoneAll } from 'react-icons/md';

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()

    const {loading, handleAddToCart, handleAlert, setAlert} = useContext(Context)
    const {id} = useParams()
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    // console.log("single data id "+data?.data[0]?.id);
    // console.log(data);

    const decreamentQuantity = () =>{
        setQuantity((prev)=>{
            if(prev === 1){
                return 1;
            }
            return prev - 1;
        })
    }

    const increamentQuantity = () =>{
        setQuantity((next)=>{
            return next + 1
        })
    }

  return (
    <div className="single-product-main-content">
    {!!loading ? <Spinner/> : (<div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img src={data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
            </div>
            <div className="right">
                <span className="name">{data?.data?.[0]?.attributes?.title}</span>
                <span className="price">&#8377;{data?.data?.[0]?.attributes?.price}</span>
                <span className="desc">{data?.data?.[0]?.attributes?.desc}</span>
                <div className="cart-button">
                    <div className="quantity-button">
                        <span onClick={decreamentQuantity}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increamentQuantity}>+</span>
                    </div>
                    <button className="add-to-cart-button" onClick={()=>{handleAddToCart(data?.data?.[0], quantity);handleAlert(<MdOutlineDoneAll/>, "Success", "Product Added to cart"); setTimeout(() => {
                         setAlert(null)
                    }, 2500);}}>
                        <FaCartPlus />
                        ADD TO CART
                    </button>
                </div>
                <span className="divider" />
                <div className="info-item">
                    <span className="text-bold" onClick={()=>{navigate(`/single-category/${data?.data[0]?.attributes?.categories?.data?.[0]?.id}`)}}>Category : <span>{data?.data[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</span></span>
                    <span className="text-bold">Share :
                        <span className="social-icons">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaPinterest />
                            <FaTwitter />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>)}
    <div className='related-product-container'>
        <RelatedProduct productId={data?.data?.[0]?.id} categoryId={data?.data[0]?.attributes?.categories?.data?.[0]?.id}  />        
    </div>
</div>
  )
}

export default SingleProduct

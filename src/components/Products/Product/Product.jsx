import React from 'react'
import "./Product.scss";
import { useNavigate } from 'react-router-dom';

const Product = ({productData}) => {
  // console.log(productData);

  const navigate = useNavigate()

  const attribute = productData?.attributes
  return (
    
    <div className="product-card" onClick={()=>{navigate(`/single-product/${productData?.id}`)}} >
    <div className="thumbnail">
        <img src={attribute?.img?.data?.[0]?.attributes?.url} alt="" />
    </div>
    <div className="prod-details">
        <span className="name">{attribute?.title}</span>
        <span className="price">&#8377; {attribute?.price}</span>
    </div>
</div>
  )
}

export default Product

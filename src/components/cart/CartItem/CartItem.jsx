import React, { useContext} from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";

const CartItem = () => {

  const {  cartItem, handleCartProductQuantity, handleRemoveItem} = useContext(Context);

  return (
    <div className="cart-products">
      {cartItem?.map((item) => {
        return (
          <div className="cart-product" key={item.id}>
            <div className="img-container">
              <img src={item?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <span className="names" >{item?.attributes?.title}</span>
                <MdClose onClick={()=>{handleRemoveItem(item); console.log("remove product");}} />
              </div>
              <div className="quantity-button">
                <span onClick={()=>{handleCartProductQuantity("dec", item)}}>-</span>
                <span>{item?.attributes?.quantity}</span>
                <span onClick={()=>{handleCartProductQuantity("inc", item)}}>+</span>
              </div>
              <div className="text">
                <span>{item?.attributes?.quantity}</span>
                <span>X</span>
                <span className="price-highlight">&#8377; {item?.attributes?.price * item?.attributes?.quantity}</span>
              </div>
            </div>
          </div>
        );
      })} 
    </div>
  );
};

export default CartItem;

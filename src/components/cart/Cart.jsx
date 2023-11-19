import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Cart.scss"

import CartItem from "./CartItem/CartItem"
import {BsCartX} from "react-icons/bs"
import {MdClose, MdOutlineDoneAll} from "react-icons/md"
import { Context } from '../../utils/context'
import {loadStripe} from "@stripe/stripe-js"
import { makePaymentRequest } from '../../utils/api'

const Cart = () => {

    const {showCart, setShowCart, cartItem, subTotal, setAlert, handleAlert} = useContext(Context);
    const navigate = useNavigate()

    const stripePromise = loadStripe(
        process.env.REACT_APP_PUBLISHABLE_KEY
    ) 
 
    const handlePayment = async () =>{
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItem,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div >
    <div className={`cart-panel ${showCart ? "reset-position" : ""}`}>
        <div className="opac-layer" onClick={()=>{setShowCart(false)}}></div>
        <div className="cart-content">
            <div className="up">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="cart-close" onClick={()=>{setShowCart(false)}} >
                        <MdClose />
                        <span>close</span>
                    </span>
                </div>
                <div className="boder-line"></div>
                {!cartItem?.length && <div className="cart-empty">
                    <BsCartX />
                    <span>No product in the Cart</span>
                    <button className="return-cta" onClick={()=>{navigate("/"); setShowCart(false)}}>BACK TO SHOP</button>
                </div>}
            </div>
            {!!cartItem?.length  && <><CartItem />
                <div className="blank-container" ></div>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal :</span>
                        <span className="text total">&#8377;{subTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={()=>{navigate("/success");setShowCart(false); handleAlert(<MdOutlineDoneAll/>, "Success", "You have been checkout"); setTimeout(() => {
                           setAlert(null) 
                        }, 2500);}}   >Checkout</button>
                    </div>
                </div> </>}
        </div>
    </div>
</div>
  )
}

export default Cart;

import React from "react";
import "./SuccessPage.scss";
import { Link } from "react-router-dom";
import { GiCheckMark} from "react-icons/gi";

const SuccessPage = () => {

  return (
    <div className="success-page-container">
      <div className="success-page-content">
        <div className="thanks-msg">
          Thanks for shopping with us!
        </div>
        <div className="order-msg">
          <GiCheckMark />
          Your order has been placed successfully.
        </div>
        <div className="visit-msg">
          For any product related query drop an email to
        </div>
        <div className="email-container">
          shariques966@gmail.com
        </div>
        <div className=" shopping-btn">
          <Link className="link-tag" to={"/"}>Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

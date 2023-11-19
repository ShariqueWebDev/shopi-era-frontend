import React from "react";
import "./Products.scss";
import Product from "./Product/Product";
import Spinner from "../Spinner/Spinner";

const Products = ({ headingText, products, headingVisibility, loading }) => {
  return (
    <div className="products-container">
      {headingVisibility && <div className="sec-heading">{headingText}</div>}
      {!!loading ? (
        <Spinner />
      ) : (
        <div className="products">
            {products?.map((productData) => {
              return <Product productData={productData} key={productData?.id} />;
            })}
          
        </div>
      )}
    </div>
  );
};

export default Products;

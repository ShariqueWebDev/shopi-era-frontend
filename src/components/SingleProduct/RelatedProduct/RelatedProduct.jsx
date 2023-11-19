import React, { useEffect, useRef, useState } from "react";
import "./RelatedProduct.scss";
import Product from "../../Products/Product/Product";
import { fetchDataFromApi } from "../../../utils/api";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const RelatedProduct = ({ productId, categoryId }) => {

  const [data, setData] = useState(null);
  const carouselContainer = useRef()

  useEffect(() => {
    relatedProductData();
    // eslint-disable-next-line
  }, []);

  const relatedProductData = async () => {
    await fetchDataFromApi(`/api/products?populate=*`).then((res) => {
      setData(res);
    });
  };

  
  const filterDataCat = data?.data?.filter((item) => {
    return categoryId === item?.attributes?.categories?.data[0]?.id;
  });
  
  // console.log(filterDataCat);

  const filterDataProd = filterDataCat?.filter((item) => {
    return item?.id !== productId;
  });
  
  const navigationCarousel =(direction) =>{
    const scrollContainer = carouselContainer.current
    const scrollAmount = direction === "left" ?
    scrollContainer.scrollLeft - (scrollContainer.offsetWidth + 10) :
    scrollContainer.scrollLeft + (scrollContainer.offsetWidth + 10)

    scrollContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="carousel-container" >
      <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={()=>{navigationCarousel("left")}}/>
        <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={()=>{navigationCarousel("right")}}/>
      <h1>Related Product</h1>
      <div className="related-product-container" ref={carouselContainer}>
          {filterDataProd?.map((item) => {
            return <Product key={item.id} productData={item} />;
          })}
      </div>
    </div>
  );
};

export default RelatedProduct;

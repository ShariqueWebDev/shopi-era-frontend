import React, { useContext, useState } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const { showSearch, setShowSearch } = useContext(Context);
  const navigate = useNavigate()

  let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
  console.log(data?.data);

  if (!query.length) {
    data = null;
  }

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`search-modal ${showSearch ? "reset-position" : ""} `}>
      <div className="center">ShopiMart</div>

      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={
            handleOnChange
          }
        />
        <MdClose
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => {
            return (
              <div key={item?.id} className="search-result-item" onClick={()=>{navigate(`/single-product/${item?.id}`); setShowSearch(false); setQuery("") }}>
                <div className="img-container">
                  <img src={item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name">
                    <span className="names">{item?.attributes?.title}</span>
                    <span className="desc">{item?.attributes?.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="blank"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;

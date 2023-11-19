import "./Home.scss"
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products'
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import Search from "../Header/Search/Search";

const Home = () => {

  const {products, setProducts, categories, setCategories, loading, setLoading} = useContext(Context)

  useEffect(()=>{
    getCategories();
    getProducts();
    // eslint-disable-next-line
  }, [])

  const getCategories = async () =>{
    setLoading(true)
    await fetchDataFromApi("/api/categories?populate=*").then((categoriesData)=>{
      setCategories(categoriesData)
    })
    setLoading(false)
  }

  const getProducts = async () =>{
    await fetchDataFromApi("/api/products?populate=*").then((prod)=>{
      setProducts(prod)
    })
  }

  return (
    <div className="home">
    <Search/>
    <Banner />
    <div className="main-content">
        <div className="layout">
            <Category categories={categories} loading={loading} />
            <Products headingText = "Popular Products" headingVisibility={true} products={products?.data} loading={loading} />
        </div>
    </div>
</div>
  )
}

export default Home

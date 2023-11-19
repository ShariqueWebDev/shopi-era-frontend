import { useEffect } from "react";
import AppContext from "./utils/context";
import Home from "./components/Home/Home"
import {Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Category from "./components/Category/Category";
import Cart from "./components/cart/Cart";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import Alert from "./components/Alert/Alert";
import About from "./components/About/About";

function App() {

  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0 ,0)
  }, [location])

  return (
    <AppContext>
      <Header/>
      <Cart/>
      <Alert/>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/single-product/:id"} element={<SingleProduct />} />
        <Route path={"/single-category/:id"} element={<Category />} />
        <Route path={"/success"} element={<SuccessPage />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
      <Newsletter/>
      <Footer/>
    </AppContext>
  );
}

export default App;

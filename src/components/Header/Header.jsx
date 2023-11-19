import { useContext, useEffect, useState } from "react"
import "./Header.scss"
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import {Link} from "react-router-dom"

import Search from "./Search/Search"
import { Context } from "../../utils/context"

const Header = () => {

    const {showCart, setShowCart, setShowSearch, cartItem} = useContext(Context)

    const [lastScroll, setLastScroll] = useState(0);
    const [scrollEvent, setScrollEvent] = useState(false);

    const scrollHandler = () =>{
        
        if(window.scrollY > 400 && window.scrollY > lastScroll){
            setScrollEvent(true);
        }
        else{
            setScrollEvent(false);
        }
        setLastScroll(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler)
        return(()=>{
            window.removeEventListener("scroll", scrollHandler)
        })
        // eslint-disable-next-line
    }, [lastScroll])


  return (
    <div>
       <header className={`main-header ${scrollEvent ? "sticky-header" : ""} `}>
                <div className="header-content">
                    <ul className="left">
                        <li><Link className="link-tag" to="/">Home</Link></li>
                        <li><Link className="link-tag" to="/about">About</Link></li>
                    </ul>
                    <div className="center" ><Link className="link" to={"/"}>ShopiMart</Link></div>
                    <div className="right">
                        <TbSearch onClick={()=>{setShowSearch(true)}} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=>{setShowCart(true); console.log("cart funtion invoked");}}>
                            <CgShoppingCart />
                        {!!cartItem.length && <span>{cartItem?.length}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {/* {<Cart  />} */}
            { <Search />}
    </div>
  )
}

export default Header

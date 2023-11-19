import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [alert, setAlert] = useState(null)

  // SHOW ALERT ACTIVITY
  const handleAlert = (img, type, message) =>{
    setAlert({
      img:img,
      type:type,
      message:message
    })
  }

  // HANDLE SUB-TOTAL COUNT
  useEffect(() => {
    let subCount = 0;
    cartItem.map((item) => {
      return (subCount +=item.attributes.quantity * item.attributes.price);
    });
    setSubTotal(subCount);
  }, [cartItem]);

  // HANDLE ADD PRODUCT TO CART
  const handleAddToCart = (product, quantity) => {
    let items = [...cartItem];
    const index = items.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity = +quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItem(items);
  };

  // INCREASE OR DECREASE PRODUCT QUANTITY IN THE CART
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItem];
    const index = items.findIndex((ind) => ind.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) {
        return;
      }
      items[index].attributes.quantity -= 1;
    }
    setCartItem(items);
  };

  // DELETE PRODUCT FROM CART
  const handleRemoveItem = (product) =>{
    let item = [...cartItem];
    item = item.filter((rem)=>rem.id !== product.id)
    setCartItem(item)  
  }

  console.log(cartItem);

  return (
    <Context.Provider
      value={{
        setAlert,
        alert,
        handleAlert,
        handleRemoveItem,
        subTotal,
        handleCartProductQuantity,
        handleAddToCart,
        products,
        setProducts,
        categories,
        setCategories,
        loading,
        setLoading,
        showCart,
        setShowCart,
        showSearch,
        setShowSearch,
        cartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

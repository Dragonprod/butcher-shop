import { createContext, useState } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const [cartProductsWithAmount, setCartProductsWithAmount] = useState({});
  const [orderItems, setOrderItems] = useState([]);

  return (
    <UIContext.Provider
      value={{
        modalActive,
        setModalActive,
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
        totalPrice,
        setTotalPrice,
        categories,
        setCategories,
        isProductAddedToCart,
        setIsProductAddedToCart,
        cartProductsWithAmount,
        setCartProductsWithAmount,
        orderItems,
        setOrderItems,
      }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

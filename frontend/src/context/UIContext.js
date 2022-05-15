import { createContext, useState } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);

  return (
    <UIContext.Provider
      value={{
        modalActive,
        setModalActive,
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
        categories,
        setCategories,
        isProductAddedToCart,
        setIsProductAddedToCart,
      }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

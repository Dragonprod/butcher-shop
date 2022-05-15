import { createContext, useState } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <UIContext.Provider
      value={{
        modalActive,
        setModalActive,
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
      }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

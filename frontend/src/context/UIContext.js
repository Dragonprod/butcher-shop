import { createContext, useState } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <UIContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

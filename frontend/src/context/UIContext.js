import { createContext } from 'react';

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

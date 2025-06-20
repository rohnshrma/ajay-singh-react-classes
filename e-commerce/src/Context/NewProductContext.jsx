import { useState, createContext } from "react";

const NewProductContext = createContext();

export const NewProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState();

  return (
    <NewProductContext.Provider value={{ product, setProduct }}>
      {children}
    </NewProductContext.Provider>
  );
};

export default NewProductContext;

import { createContext, useState } from "react";

export const DocsContext = createContext({});

export const DocsProvider = ({ children }) => {
  const [content, setContent] = useState("Introduction To LayerEdge");
  return (
    <DocsContext.Provider value={{ content, setContent }}>
      {children}
    </DocsContext.Provider>
  );
};

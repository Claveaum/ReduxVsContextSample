import { createContext, useMemo, useState } from "react";

export const ColorContext = createContext({});

export function ColorContextProvider({ children }) {
  const [color, setColor] = useState("#aabbcc");

  const contextValue = useMemo(() => ({ color, setColor }), [color, setColor]);

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}

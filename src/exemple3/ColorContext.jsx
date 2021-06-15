import Color from "color";
import {
  createContext,
  useCallback,
  useMemo,
  useReducer
} from "react";

export const ColorContext = createContext({});

const SET_COLOR = Symbol("SET_COLOR");
const LIGHTEN = Symbol("LIGHTEN");
const DARKEN = Symbol("DARKEN");

function colorReducer(state, action) {
  switch (action.type) {
    case SET_COLOR: {
      return action.color;
    }
    case LIGHTEN: {
      return Color(state).lighten(action.ratio).hex();
    }
    case DARKEN: {
      return Color(state).darken(action.ratio).hex();
    }
    default: {
      return state;
    }
  }
}

export function ColorContextProvider({ children }) {
  const [color, dispatch] = useReducer(colorReducer, "#aabbcc");

  const setColor = useCallback(
    (color) => dispatch({ type: SET_COLOR, color }),
    [dispatch]
  );
  const lighten = useCallback(
    (ratio = 0.1) => dispatch({ type: LIGHTEN, ratio }),
    [dispatch]
  );
  const darken = useCallback(
    (ratio = 0.1) => dispatch({ type: DARKEN, ratio }),
    [dispatch]
  );

  const contextValue = useMemo(
    () => ({ color, setColor, lighten, darken }),
    [color, darken, lighten, setColor]
  );

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}

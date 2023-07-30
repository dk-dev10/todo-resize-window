import { useReducer } from "react";

import { TodosContext } from "./context";
import { reducer, initialState } from './reducer';

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState)
  return <TodosContext.Provider value={[todos, dispatch]}>
    {children}
  </TodosContext.Provider>
}


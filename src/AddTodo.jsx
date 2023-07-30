import { useContext } from "react";
import { todosActions, TodosContext } from "./context";

export const AddUser = () => {
  const [, dispatch] = useContext(TodosContext);

  const onClick = () => {
    const id = Math.random();
    dispatch(
      todosActions.addUser({
        id,
        title: "bob-" + id,
      })
    );
  };

  return <button onClick={onClick}> add user</button >
};



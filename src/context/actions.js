export const addTodo = (todo) => {
  return {
    type: "ADD__TODO",
    todo,
  };
};
export const removeTodo = (todo) => {
  return {
    type: "REMOVE_USER",
    todo,
  };
};

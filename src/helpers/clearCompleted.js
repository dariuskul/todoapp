export const clearCompleted = (todos) => {
  let newArr = [];
  for (let index = 0; index < todos.length; index++) {
    if (todos[index].completed === false) {
      newArr.push(todos[index]);
    }
  }

  return newArr;
};

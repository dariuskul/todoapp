export const calculateCompleted = (todos) => {
  let sum = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === false) {
      sum += 1;
    }
  }

  return sum;
};

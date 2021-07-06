import { ACTIVE, ALL, COMPLETED } from "./constants";

export const filter = (todos, by) => {
  let filterBy;

  switch (by) {
    case COMPLETED:
      filterBy = true;
      break;
    case ACTIVE:
      filterBy = false;
      break;
    case ALL:
      filterBy = "";
      break;
    default:
      filterBy = "";
  }

  let filterResult =
    filterBy !== ""
      ? todos.filter((item) => item.completed === filterBy)
      : todos;
  return filterResult;
};

import { ActionTypes } from "./action-types";

export const setItem = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const selectedItem = (item) => {
  return {
    type: ActionTypes.SELETED_ITEM,
    payload: item,
  };
};

export const removeSelectedItem = () => {
  return {
    type: ActionTypes.REMOVE_SELETED_ITEM,
  };
};

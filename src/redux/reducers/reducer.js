import { ActionTypes } from "./../actions/action-types";

const inistialState = {
  items: [],
};

export const itemReducer = (state = inistialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};

export const selectedItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELETED_CAT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELETED_ITEM:
      return {};
    default:
      return state;
  }
};

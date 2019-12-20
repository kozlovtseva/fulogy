import * as Constants from "../constants";

const initialState = {
  lamps: []
};

export function lampsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_LAMPS: {
      state = {
        ...state,
        lamps: action.payload
      };
      break;
    }
    default: {
      state = { ...state };
    }
  }
  return state;
}

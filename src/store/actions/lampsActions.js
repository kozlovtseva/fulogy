import { GET_LAMPS } from "../constants";

import DATA from "../data";

export function getLamps() {
  return {
    type: GET_LAMPS,
    payload: DATA
  };
}

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./../actions";

const initialState = {
  transactions: {
    time_open: "2021-01-01T00:00:00Z",
    time_close: "2021-01-01T23:59:59Z",
    open: 28966.95587637,
    high: 29568.27873174,
    low: 28812.98178846,
    close: 29344.67383113,
    volume: 29395282202,
    market_cap: 538407186724,
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        transactions: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        transactions: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

const initialState = {
  transaction: {id:"12345", type:"buy", status:"pending", amount:{amount:"1",currency:"BTC"}},
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        transaction: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        transaction: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        transaction:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};
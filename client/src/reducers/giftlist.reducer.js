import { CREATE_LIST_FAILURE, CREATE_LIST_REQUEST, CREATE_LIST_SUCCESS, GET_SELF_GIFTLIST } from "../actions/giftlist.actions";


const initialState={  loading: false, error: null, newList: null,};
export default function giftlistReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SELF_GIFTLIST:
        return action.payload;
        case CREATE_LIST_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
              newList: null,
            };
          case CREATE_LIST_SUCCESS:
            return {
              ...state,
              loading: false,
              newList: action.payload,
            };
          case CREATE_LIST_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
      default:
        return state;
    }
  }
import axios from "axios";

export const GET_SELF_GIFTLIST = "GET_SELF_GIFTLIST";
export const CREATE_LIST_REQUEST = 'CREATE_LIST_REQUEST';
export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
export const CREATE_LIST_FAILURE = 'CREATE_LIST_FAILURE';

// Action Creators
export const createList = (listData) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_LIST_REQUEST });
  
      try {
        console.log('Request payload:', listData);
        const response = await axios.post(`/api/gifts`, listData);
  
        if (response.status !== 201) {
          throw new Error('Failed to create list');
        }
  
        dispatch({
          type: CREATE_LIST_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_LIST_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  


export const getSelfGiftlist = (userId) => {
  return (dispatch) => {
    return axios
      .get(`/api/gifts/`+userId)
      .then((res) => {
        dispatch({ type: GET_SELF_GIFTLIST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


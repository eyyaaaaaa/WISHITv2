import { GET_USER } from "../actions/user.actions";

const intialState={};

export default function userReducer(state=intialState, action){
    switch (action.type){
        case GET_USER:
            return action.payload
        default: return state;
    }
}
import axios from "axios";
export const GET_USER="GET_USER";

export const getUser= (userId) =>{
    return(dispatch)=>{
        return axios.get(`/api/users/${userId}`)
        .then((res)=>{
            dispatch({type:GET_USER, payload:res.data })
        })
        .catch((err)=> console.log(err));
    }
}
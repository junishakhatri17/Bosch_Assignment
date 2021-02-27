import { USER_DETAILS } from "./types";
import axios from 'axios';



export const userDetails = () => async (dispatch) => {    
    const response = await axios.get(`https://reqres.in/api/users?page=2`);
    
    dispatch({
        type: USER_DETAILS,
        payload: response.data.data
    })
}

export const addUser = (data) => async dispatch => {
    dispatch({
        type: "ADDUSER",
        payload: data
    })
}

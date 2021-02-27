import { USER_DETAILS } from './../action/types';
const INITIAL_STATE = {
    UserDetails: [],
    user:{},
    addUser: {}
  };
const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case "USER_DETAILS":             
            return {...state, UserDetails: action.payload}
        case "USER":
            return {...state,user:action.payload}   
        case "ADDUSER":
                return {...state,UserDetails:state.UserDetails.concat(action.payload)}   
        default:     
            return state
        
    }
}

export default usersReducer;

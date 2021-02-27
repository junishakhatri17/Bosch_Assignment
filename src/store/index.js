import { combineReducers } from 'redux';
import usersReducer from '../reducers/userReducer'

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
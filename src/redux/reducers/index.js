import { combineReducers } from "redux";
import { customerReducer } from "./customers.reducer";
import { addcustomerReducer } from "./addcustomer.reducer";

export default combineReducers({
    customerReducer,
    addcustomerReducer
})
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// Houses all of our reducers

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;
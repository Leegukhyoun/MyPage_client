import { combineReducers } from "redux";
import pageutils from "./pageutils";
import loginIndex from "./loginIndex";
import createUser from "./createUser";
const rootReducer = combineReducers({ pageutils, loginIndex, createUser});
export default rootReducer;

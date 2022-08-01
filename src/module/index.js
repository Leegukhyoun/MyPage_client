import { combineReducers } from "redux";
import pageutils from "./pageutils";
import loginIndex from "./loginIndex"
const rootReducer = combineReducers({ pageutils, loginIndex });
export default rootReducer;

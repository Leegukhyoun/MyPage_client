import { combineReducers } from "redux";
import pageutils from "./pageutils";
import loginIndex from "./loginIndex";
import createUser from "./createUser";
import memoIndex from "./memoIndex";
const rootReducer = combineReducers({ pageutils, loginIndex, createUser, memoIndex });
export default rootReducer;

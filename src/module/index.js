import { combineReducers } from "redux";
import pageutils from "./pageutils";
import loginIndex from "./loginIndex";
import memoIndex from './memoIndex';
const rootReducer = combineReducers({ pageutils, loginIndex, memoIndex });
export default rootReducer;

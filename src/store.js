import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Account from "./features/accounts/accountSlice";
import  Customer  from "./features/customers/customerSlice";

const root=combineReducers({Account,Customer})
const store=createStore(root,applyMiddleware(thunk))
export default store;

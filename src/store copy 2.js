import { configureStore } from "@reduxjs/toolkit";
import Account from "./features/accounts/accountSlice";
import  Customer  from "./features/customers/customerSlice";

const store= configureStore({
    reducer:{Account,Customer}

})

export default store;

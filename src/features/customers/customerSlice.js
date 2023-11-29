import { createSlice } from "@reduxjs/toolkit";

const initialState = { fullname: "", nationalId: 0, createdAt: "" };

const CustomerSlice=createSlice({name:'customer',initialState,reducers:{
  createCustomer:{
    prepare(fullname,nationalId,date){
      return {payload:{fullname,nationalId,date:new Date().toISOString()}}
    },
    reducer(state,action){
      state.fullname=action.payload.fullname
      state.nationalId=action.payload.nationalId
      state.createdAt=action.payload.date
    }
  },
  update(state,action){
    state.fullname=action.payload
  }
}})

export default CustomerSlice.reducer;
export const{createCustomer,update}=CustomerSlice.actions
// export default function Customerreducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.date,
//       };
//     case "customer/update":
//       return { ...state, fullname: action.payload };
//     default:
//       return state;
//   }
// }
// export function createCustomer(fullname, nationalId) {
//   return {
//     type: "customer/create",
//     payload: { fullname, nationalId, date: new Date().toISOString() },
//   };
// }
// export function update(fullname) {
//   return { type: "customer/update", payload: { fullname } };
// }

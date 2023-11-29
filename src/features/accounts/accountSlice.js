import { createSlice } from "@reduxjs/toolkit";


const initialState = { balance: 0, loan: 0, loanPurpose: "" };

const accountSlice=createSlice({name:'account',initialState,reducers:{
  deposite(state,action){
    state.balance+=action.payload
  },
  withdraw(state,action){
    state.balance-=action.payload
  },
  requestloan:{
    prepare(amount,purpose){
      return {payload:{amount,purpose}}
    },  
    reducer(state,action){ 
     if(state.loan>0) return;
     state.loan=action.payload.amount
     state.loanPurpose=action.payload.purpose
    },
  },
  payloan(state,action){
    state.balance-=state.loan;
    state.loan=0;
    state.loanPurpose=''; 
  } 
}})

export const {deposite,withdraw,requestloan,payloan}=accountSlice.actions
 
export default accountSlice.reducer;
// export default function Accountreducer(state = initialAccountState, action) {
//   switch (action.type) {
//     case "account/deposite":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestloan":
//       if (state.loan > 0) return state;
//       return { ...state, loan: action.payload };
//     case "account/payloan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }
// export function deposite(amount,currency) {
//  if(currency==='USD') return { type: "account/deposite", payload: amount };

// }
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestloan(amount) {
//   return { type: "account/requestloan", payload: amount };
// }
// export function payloan() {
//   return { type: "account/payloan" };
// }

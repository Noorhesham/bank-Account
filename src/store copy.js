import { combineReducers, createStore } from "redux";

    const initialAccountState={balance:0,loan:0,loanPurpose:''}
const initialCustomerState={fullname:'',nationalId:0,createdAt:''}
function Accountreducer(state=initialAccountState,action){
    switch(action.type){
    case"account/deposite":
        return {...state,balance:state.balance+action.payload}
    case"account/withdraw":
        return {...state,balance:state.balance-action.payload}
    case"account/requestloan":
        if(state.loan>0) return state;
        return {...state,loan:action.payload}
    case"account/payloan":
        return {...state,loan:0,loanPurpose:"",balance:state.balance-state.loan}
    default:
        return state
    }   
}
function Customerreducer(state=initialCustomerState,action){
    switch(action.type){
        case"customer/create":
            return {...state,fullname:action.payload.fullname,nationalId:action.payload.nationalId,createdAt:action.payload.date}
        case"customer/update":
            return {...state,fullname:action.payload}
        default:
            return state
        }   
}
const root=combineReducers({Accountreducer,Customerreducer})
const store=createStore(root)
function deposite(amount){
    return {type:'account/deposite',payload:amount}
}
function withdraw(amount){
    return {type:'account/withdraw',payload:amount}
}
function requestloan(amount){
    return {type:"account/requestloan",payload:amount}
}
function payloan(){
    return {type:'account/payloan'}
}
function createCustomer(fullname,nationalId){
    return {type:'customer/create',payload:{fullname,nationalId,date:new Date().toISOString()}}
}
store.dispatch(deposite(500))
store.dispatch(requestloan(4000))
store.dispatch(payloan())
store.dispatch(createCustomer('noor',213123123))
console.log(store.getState())

import React from "react"
import { AUTHLOADING } from "../actions/AuthAction/authaction"
interface authstate {
    authloading:any
}
const initialState:authstate = {
   authloading: false
}

const LoadingReducer = (state =  initialState, action:any) => {
    switch (action.type){
      
        case AUTHLOADING: return{
            ...state,
            authloading: action?.payload,

        };
        
        default: return state;
    }
}
export default  LoadingReducer
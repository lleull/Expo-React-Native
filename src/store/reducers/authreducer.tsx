
import React from "react"
import { AUTHLOADING, CHANGETHEAUTH, LOGINUSER, LOGOUTUSER, REGISTERUSER, SAVEUSERDATA } from "../actions/AuthAction/authaction"
interface authstate {
    user:any,
}
const initialState:authstate = {
   user: null,
}

const AuthReducer = (state =  initialState, action:any) => {
    switch (action.type){
        case SAVEUSERDATA: return{
            ...state,
            user: action?.payload,
        };
        case LOGOUTUSER: return{
            user: null
        };
        
        default: return state;
    }
}
export default  AuthReducer
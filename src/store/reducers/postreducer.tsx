
import React from "react"
    import { CHANGETHEAUTH, LOGINUSER, LOGOUTUSER, REGISTERUSER } from "../actions/AuthAction/authaction"

import { AddNewPost } from "../actions/PostsAction"
interface authstate {
    jobs:any
}
const initialState:authstate = {
   jobs:null
}

const PostRedcuer = (state =  initialState, action:any) => {
    switch (action.type){
      
        case AddNewPost: return{
            ...state,
            jobs: action?.payload
        };
     
        default: return state;
    }
}
export default  PostRedcuer
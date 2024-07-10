import { combineReducers } from "redux";
import AuthReducer from "./authreducer";
import PostRedcuer from "./postreducer";
import LoadingReducer from "./loadingreducer";
const rootReducer = combineReducers({
    auth: AuthReducer,
    post: PostRedcuer,
    loader: LoadingReducer
    
})
export default rootReducer
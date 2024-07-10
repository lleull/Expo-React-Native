import { take,put, takeEvery, call } from "redux-saga/effects";
import { CHANGETHEAUTH, LOGINUSER, REGISTERUSER } from "../../actions/AuthAction/authaction";
import { handleRegisterUser } from "../../actions/AuthAction/authaction";
import Authservice from "../../../services/Authservice";
import { ADDNEWPOST, AddNewPost } from "../../actions/PostsAction";

function* WorkerAddNewPost(action:any) {
  try {
    console.log("Payload", action)

  } catch (error) {
    console.log("registeredUserError: ", error);

  }
}




export function*  WatchAddNewPost() {
  while (true) {
    const { payload } = yield take(ADDNEWPOST);
    yield call(WorkerAddNewPost, payload);
  }
}




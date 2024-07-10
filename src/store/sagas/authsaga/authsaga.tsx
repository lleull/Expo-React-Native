import { take, put, takeEvery, call } from "redux-saga/effects";
import { AUTHLOADING, CHANGETHEAUTH, LOGINUSER, REGISTERUSER, SAVEUSERDATA, SIGNINUSER } from "../../actions/AuthAction/authaction";
import { handleRegisterUser } from "../../actions/AuthAction/authaction";
import Authservice from "../../../services/Authservice";
import { addDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";

const auth = getAuth()
function* authchanger(action: any) {
  yield console.log("State changing")
}
function* HandleRegisterWorker(payload: any) {
  const newuserdata = payload
  //  yield  const randomId = Math.random().toString(36).substring(2);
  try {
    yield put({
      type: AUTHLOADING,
      payload: true
    })
    const { email, password, userName, phoneNumber } = newuserdata;
    // yield  createUserWithEmailAndPassword(auth, email, password)

    const userCredential = yield call(createUserWithEmailAndPassword, auth, email, password); // Use Firebase auth function

    const user = userCredential.user;
    yield console.log("USERCREATED", user)
    const { uid, email: userEmail } = user;
    const usersCollection = collection(db, 'users');

    const userdata: { data: any } = yield call(addDoc, usersCollection, {
      email: userEmail,
      username: userName,
      phonenumber: phoneNumber,
      id:uid
      // Add other user data fields here
    });
    yield console.log("NEWUSERADDED", userdata, { firebaseUid: uid })
    const data = { email, userName, phoneNumber }
    yield put({
      type: SAVEUSERDATA,
      payload: data
    })
    console.log("SENTDATA")
  } catch (error) {
    console.log("registeredUserError: ", error);

  }
  yield put({
    type: AUTHLOADING,
    payload: false
  })
}
function* workerHandleSignInUser(payload: any) {
  const newuserdata = payload
  const { email, password } = newuserdata;
  //
  try {
       yield put({
      type: AUTHLOADING,
      payload: true
    })
    const authinfo: { data: any } = yield signInWithEmailAndPassword(auth, email, password)
    const userId = authinfo?.user?.uid
    // const snapshotuser: { data: any } = yield getDoc(userRef)
    yield console.log("____________________________users", userId)
    const checkUserData = async () => {
      try {
    const usersCollectionRef = collection(db, "users")
    // const  = collection(firebase.firestore(), 'users');
    const usersQuery = query(usersCollectionRef, where("id", '==', userId)); // Double quotes for string fields

    const querySnapshot = await getDocs(usersQuery);

    if (querySnapshot.empty) {
      console.log('No matching documents found');
      return null; // Handle no matching data case
    } else {
      const filteredData = querySnapshot.docs.map((doc) => doc.data());
      return  filteredData[0]; // Return the first matching document (modify if needed)
    }
  } catch (error) {
    console.error('Error fetching user data:', error?.message);
    throw error; // Re-throw error for handling in the calling component
  }
}; 

   const userdata:{data} =  yield checkUserData()
   yield put({
    type: SAVEUSERDATA,
    payload:userdata
   })
  } catch (error) {
    console.log("UIOPUIOPUIOPOI")
  }
     yield put({
      type: AUTHLOADING,
      payload: false
    })
}

function* HandleLoginUser(action: any) {
  try {
    yield console.log("oadd", action)
  } catch (error) {
    console.log(error)
  }
}



export function* watchauthchanger() {
  yield takeEvery(CHANGETHEAUTH, authchanger)
}

export function* watchregister() {
  while (true) {
    const { payload } = yield take(REGISTERUSER);
    yield call(HandleRegisterWorker, payload);
  }
}
export function* watchsigninuser() {
  while (true) {
    const { payload } = yield take(SIGNINUSER);
    yield call(workerHandleSignInUser, payload);
  }
}


export function* watchlogin() {
  yield takeEvery(LOGINUSER, HandleLoginUser)
}




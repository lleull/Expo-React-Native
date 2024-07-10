import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGMq3eLGKPgYOS9xCrT9yFgDrN_cpIjD0",
  authDomain: "etborsa-a925b.firebaseapp.com",
  projectId: "etborsa-a925b",
  storageBucket: "etborsa-a925b.appspot.com",
  messagingSenderId: "489956913492",
  appId: "1:489956913492:web:9e886aa096f357259d58c1",
  measurementId: "G-W5LHJ5Z5SY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
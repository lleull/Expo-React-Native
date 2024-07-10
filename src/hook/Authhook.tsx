import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { LOGOUTUSER,  handleRegisterUser, handleSignInUser, handlelogout } from '../store/actions/AuthAction/authaction'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/Firebase'
const AuthHook = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [locationName, setLocationName] = useState<string>("");
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");

  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState<any>(null);

  const [inputErrors, setInputtErrors] = useState({});
  const [address, setAddress] = useState<string>("");
  const userData = useSelector((state: any) => state?.auth?.user)
    const AuthLoading = useSelector((state: any) => state?.loader?.authloading)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("FIREBASEUSER")
        // ...
      } else {
        dispatch({
          type: LOGOUTUSER
        })
      }
    });
    console.log("userdata", userData)
  }, [userData])

  useEffect(() => {

    console.log("userdata", userData)
  }, [userData])
  const handleRegisterUseraction = (e: any) => {
    e.preventDefault();
    const data = {
      email, password, confirmPassword, userName, phoneNumber
    }
    console.log(data)

    // Validation rules
    let errors = {};

    if (!userName || userName.length < 5) {
      errors.userName = 'Username is required and must be at least 5 characters long';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is required and must be a valid email address';
    }

    if (!phoneNumber || isNaN(phoneNumber)) {
      errors.phoneNumber = 'Phone number is required and must be a number';
    }

    if (!password || password.length < 5) {
      errors.password = 'Password is required and must be at least 5 characters long';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      dispatch(handleRegisterUser(data))
      setInputtErrors(errors);
      return;
    } else {
      dispatch(handleRegisterUser(data))

    }

  };
  const handleloginuseraction = (e) => {
    e.preventDefault();
    const data = {
      email, password
    }
      let errors = {};

    if(!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is required and must be a valid email address';
    }

    if (!password || password.length < 5) {
      errors.password = 'Password is required and must be at least 5 characters long';
    }


    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setInputtErrors(errors);
      return;
    } else {
      dispatch(handleSignInUser(data))

    }

  }
  const handlelogoutaction = () => {

    dispatch(handlelogout())

  }
  return {

    userData,
    email,
    setEmail,
    setPassword,
    password,
    profilePic,
    phoneNumber,
    setPhoneNumber,
    confirmPassword,
    setConfirmPassword,
    handleRegisterUseraction,
    handleloginuseraction,
    handlelogoutaction,
    userName,
    setUserName,
    inputErrors,
    setInputtErrors,
    AuthLoading
  }

}

export default AuthHook


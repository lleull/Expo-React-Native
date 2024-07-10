export const CHANGETHEAUTH = "CHANGETHEAUTH"
export const REGISTERUSER = "REGISTERUSER"
export const LOGINUSER = "LOGINUSER"
export const LOGOUTUSER = "LOGOUTUSER"
export const SIGNINUSER = "SIGNINUSER"
export const AUTHLOADING = "AUTHLOADING"
export const SAVEUSERDATA = "SAVEUSERDATA"



export const handleAuthAction  = () => ({
   type: CHANGETHEAUTH
})

export const handleRegisterUser  = (data) => ({
   type: REGISTERUSER,
   payload: data
})
export const handleSignInUser  = (data) => ({
   type: SIGNINUSER,
   payload: data
})

export const handlelogout  = () => ({
   type: LOGINUSER,
})



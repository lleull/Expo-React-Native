import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../config/Firebase'
interface AuthType {
    RegisterUser: any
}
const Authservice:AuthType =  {
     RegisterUser: async (payload:any) =>{
  
      //  console.log("data", payload)
       try {
        useEffect(() => {

           
        },[])
         
       } catch (error) {
        console.log(error)
        
       }
    }
}

export default Authservice
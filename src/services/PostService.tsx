import { View, Text } from 'react-native'
import React from 'react'
interface AuthType {
    RegisterUser: any
}
const PostService:AuthType =  {
     RegisterUser: async ({data}:any) =>{
       try {
        console.log("WORKING1")

        console.log("WORKING")
       } catch (error) {
        console.log(error)
        
       }
    }
}

export default PostService
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { handleLogInUser, handleRegisterUser, handlelogout } from '../store/actions/AuthAction/authaction'
import { AddNewPost } from '../store/actions/PostsAction'

const UsePost = () => {

      const [jobTitle, setJobTitle] = useState("")
      const [companyName, setCompanyName] = useState("")
      const [logoUri, setLogoUri] = useState("")
      const [jobType, setjobType] = useState("")
      const [salary, setSalary] = useState("")
      const [location, setLocation] = useState("")
      const [description, setDescription] = useState("")
      const [postErrors, setPostErrors ] = useState("")
      const dispatch = useDispatch()



    
        const AddNewPostAction = () => {
          const data  = {
            jobTitle,
            companyName,
            logoUri,
            jobType,
            salary,
            location,
            description}
          dispatch(AddNewPost(data))
        }
  return {

     AddNewPostAction,
     jobTitle,
     setjobType,
     companyName,
    setCompanyName,
     logoUri,
    setLogoUri,
    jobType, 
    description,
    setDescription,
    salary, setSalary,
    location, setLocation
    }
  
}

export default UsePost


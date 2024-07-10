

import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { handleAuthAction } from '../store/actions/AuthAction/authaction'
import { handleAuthAction } from '../../store/actions/AuthAction/authaction'
import AuthHook from '../../hook/Authhook'
import UsePost from '../../hook/PostHook'

const JobPostScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const {jobTitle, jobType, setCompanyName, setDescription, setLocation,setLogoUri,setSalary,setjobType, companyName, description, location, logoUri, salary, AddNewPostAction} = UsePost()
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   try {
  //     let permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }
  //     let result: ImagePicker.ImagePickerResult =
  //       await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //       });

  //     console.log("======", result);

  //     if (!result.canceled) {
  //       setProfilePic(result.assets[0]?.uri);
  //     }
  //   } catch (e) {
  //     console.log("ERROR WHILE GETTING PHOTO: ", e);
  //   }
  // };

  return (

<SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}} >

<View style={{width:"100%",alignItems:"center", justifyContent:"center", paddingHorizontal:10, backgroundColor:"#E1E0E0 " }}>
<Text style={{fontSize:29, marginBottom:15, width:"100%", textAlign:"center"}}>Add new Job</Text>
<View style={{width:"100%",flexDirection:"column",paddingHorizontal:20, alignItems:"flex-start", justifyContent:"flex-start" }}>
<View style={styles.parentinput}>

<TextInput placeholderTextColor="black" value={companyName} onChangeText={(values) => setCompanyName(values)} placeholder="companyName" style={styles.Inputs}/>

</View>
{/* {inputErrors?.userName ?  <Text style={{marginTop:2,marginLeft:15, color:"red", fontSize:8, width:"100%", textAlign:"left", paddingHorizontal:2, paddingVertical:2}}> {inputErrors?.userName} </Text> :null} */}
<View style={styles.parentinput}>

<TextInput placeholderTextColor="black"  value={jobType} onChangeText={(values) => setjobType(values)} placeholder="jobType" style={styles.Inputs}/>

</View>
{/* {inputErrors?.email ?  <Text style={{marginTop:2,marginLeft:15, color:"red", fontSize:8, width:"100%", textAlign:"left", paddingHorizontal:2, paddingVertical:2}}> {inputErrors?.email} </Text> :null} */}
<View style={styles.parentinput}>

<TextInput placeholderTextColor="black" value={location} onChangeText={(values) => setLocation(values)} placeholder="location" style={styles.Inputs}/>
</View>
  {/* {inputErrors?.phoneNumber ?  <Text style={{marginTop:2,marginLeft:15, color:"red", fontSize:8, width:"100%", textAlign:"left", paddingHorizontal:2, paddingVertical:2}}> {inputErrors?.phoneNumber} </Text> : null} */}

<View style={styles.parentinput}>


<TextInput placeholderTextColor="black" value={description} onChangeText={(values) => setDescription(values)} placeholder="description" style={styles.Inputs}/>

</View>
{/* {inputErrors?.password ?  <Text style={{marginTop:2,marginLeft:15, color:"red", fontSize:8, width:"100%", textAlign:"left", paddingHorizontal:2, paddingVertical:2}}> {inputErrors?.password} </Text> :null} */}

<View style={styles.parentinput}>


<TextInput placeholderTextColor="black" value={salary} onChangeText={(values) => setSalary(values)} placeholder="salary" style={styles.Inputs}/>

</View>
{/* {inputErrors?.confirmPassword ?  <Text style={{marginTop:2,marginLeft:15, color:"red", fontSize:8, width:"100%", textAlign:"left", paddingHorizontal:2, paddingVertical:2}}> {inputErrors?.confirmPassword} </Text> : null} */}

<Pressable onPress={() => AddNewPostAction()} style={styles.Btns}>
  
<Text style={{color:"#f3f3f3"}}>Add Post</Text>

</Pressable>

{/* <Pressable style={styles.Buttons} onPress={() => navigation.navigate("SIGNINSCREEN")}>
<Text style={{color:"#f3f3f3"}}></Text>

</Pressable> */}
<Pressable onPress={() => navigation.navigate("SIGNINSCREEN")}>

<Text style={{width:"100%",marginTop:10,fontWeight:700, fontSize:12, textAlign:"center"}}>Already have an account</Text>
</Pressable>


</View>
</View>
</SafeAreaView>
  )
}

export default JobPostScreen

const styles = StyleSheet.create({
  Inputs:{
   paddingVertical:10,
    marginLeft:6,
   width:"100%",
    paddingHorizontal:20,
   backgroundColor:"#E1E0E0",
   borderBottomLeftRadius:90,

     borderRadius:20,
    borderWidth:0,
    color:"black"
  
  },
  parentinput:{
    marginBottom:5,
    marginTop:5,
  
    width:"95%",
    backgroundColor:"#325AB7",
    borderTopRightRadius:50,

      borderRadius:30,
      
     borderWidth:0,
     color:"white"
  },
  Btns:{
    marginTop:40,
    paddingVertical:20,
     marginLeft:6,
    width:"95%",
     paddingHorizontal:20,
    backgroundColor:"#1199ff",
      borderRadius:10,
      alignItems:"center",
     borderWidth:0
   },
   Buttons:{
    marginTop:10,
    paddingVertical:20,
     marginLeft:6,
    width:"95%",
     paddingHorizontal:20,
    backgroundColor:"#090C11",
      borderRadius:10,
      alignItems:"center",
     borderWidth:0
   }
})
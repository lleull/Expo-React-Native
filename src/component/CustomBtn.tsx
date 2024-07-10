import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
// import Header from '../component/Header'

const CustomBtn = () => {
  return (
  <Pressable style={styles.Btns}>
<Text style={{color:"#000999"}}>LogOut</Text>

</Pressable>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
  Btns:{
    marginTop:40,
    paddingVertical:10,
     marginLeft:6,
    width:"95%",
     paddingHorizontal:20,
    backgroundColor:"#ff00ff",
      borderRadius:10,
      alignItems:"center",
     borderWidth:0
   }
})
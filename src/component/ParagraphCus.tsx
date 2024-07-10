import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const ParagraphUi = ({title}) => {
  return (
         <View style={{  paddingVertical:20,  backgroundColor:"transparent", alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
         
          <Text style={{fontSize:26}}>{title} </Text>
          <Text style={{fontSize:14, marginTop:30}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt itaque doloribus natus quia maxime optio quasi voluptatum mollitia? Optio necessitatibus expedita laboriosam beatae cupiditate sunt ad, dignissimos eum. Harum, assumenda. </Text>

         </View>
  )
}

export default ParagraphUi

const styles = StyleSheet.create({})
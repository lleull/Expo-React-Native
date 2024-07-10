import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const MainTitle = () => {
  return (
         <View style={{  paddingVertical:20, height:90, backgroundColor:"transparent", alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
         
              <Text style={{fontSize:29, color:"#ffffff",fontWeight:800,  }}>LOBAS</Text>
         </View>
  )
}

export default MainTitle

const styles = StyleSheet.create({})
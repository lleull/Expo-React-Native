import { StyleSheet, Text, View, Image, Pressable, Animated } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTitle from '../../component/MainTitle'
import { navigate } from '../../navigation/stackNavigation'
import { Fontfamilies } from '../../utils/Fonts1'
const OnBoardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#1199ff",paddingHorizontal:10, alignItems:"center" }}>
      {/* <Text>heloo</Text> */}
      <MainTitle/>
      {/* <Image source={Images.Origin} style={{position:"absolute", width:250, height:220,right:-120,zIndex:-5, top:20}}/> */}
      <View style={{width:"90%",marginTop:150, alignItems:"center"}}>

      <Text style={{color:"white", fontSize:27, fontWeight:700}}>The Future of Work in</Text>
      <Text style={{color:"red",  fontSize:37, fontWeight:500, fontFamily:"Raleway-Bold"}}>Independet</Text>

      </View>
      <View style={{width:"90%", flex:1, alignItems:"center"}}>
      <Text style={{color:"#fff0ff",  fontSize:30, fontWeight:700}}>Work That is</Text>
      <Text style={{color:"#fff0ff",  fontSize:30, fontWeight:500}}>Worth its Weight</Text>
       </View>
       <View style={{position:"absolute",bottom:0,flexDirection:"row", justifyContent:"space-between", alignItems:"center",paddingHorizontal:2,borderRadius:25,marginBottom:20, width:"99%",backgroundColor:"white", height:59}}>
       <Text style={{color:"#",  fontSize:22, fontWeight:200}}>Contiune</Text>

       <Pressable onPress={() => {
         navigation.navigate("SIGNUPSCREEN");
        }}style={{zIndex:5,  backgroundColor:"black",alignItems:"center", justifyContent:"center", width:55, height:55,  borderRadius:30}}>
          {/* <Image source={Images.Arrow} style={{width:40, height:40}}/> */}
        </Pressable> 
         </View>


    </SafeAreaView>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },

})
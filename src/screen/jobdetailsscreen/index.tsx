import { View,Image, Text, Pressable } from 'react-native'
import React from 'react'
import HeaderTitle from '../../component/header/Headerxu'
import SliderState from '../../component/SliderState'
import ParagraphUi from '../../component/ParagraphCus'
import { ScrollView } from 'react-native-gesture-handler'
const JobDetailScreen = ({data}:any) => {
  return (
    <ScrollView style={{paddingHorizontal:20}}>

    <View style={{ alignItems:"center", justifyContent:"center"}}>
      <HeaderTitle  title="Job Details" />
      <Image  source={{uri:data?.logoUri}} style={{width: 85,backgroundColor:"black", marginTop:10,borderRadius:5, height:85}}/>
     <Text>{data?.companyName}</Text>
     <Text>{data?.salary}</Text>
     <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-between"}}>
            <Pressable style={{ borderRadius:20, paddingHorizontal:10, paddingVertical:3, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"black", fontSize:11}}>{data?.jobType}</Text>
            </Pressable>

            <Pressable  style={{ borderRadius:20, paddingHorizontal:10, paddingVertical:3, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"black", fontSize:11}}>Part Time</Text>
            </Pressable>
            <Pressable  style={{ borderRadius:20, paddingHorizontal:10, paddingVertical:3, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"black", fontSize:15}}>Anywhere</Text>
            </Pressable>
       </View>
         <SliderState first="Description" second="Contact"/>
       <ParagraphUi title="About the job:"/>
       <ParagraphUi title="Qualification:"/>

    </View>
    </ScrollView>
  )
}

export default JobDetailScreen
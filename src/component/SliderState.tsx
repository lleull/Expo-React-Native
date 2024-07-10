import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { useState } from 'react'

const SliderState  = ({first, second}:any) => {
    const [selected, setSelected] = useState("Description")
    return (
      <View style={{width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
    <Pressable onPress={() => setSelected(first)}  style={{ width:"47%",backgroundColor:selected === first ? "blue" : "#ffffff",  borderRadius:20, paddingHorizontal:10, paddingVertical:23, alignItems:"center", justifyContent:"center"}}>

        <Text style={{color:selected === first ? "white" : "black"}}>{first}</Text>
        </Pressable>
        <Pressable onPress={() => setSelected(second)}  style={{ width:"47%",borderRadius:20, backgroundColor:selected === second ? "blue" : "#ffffff", paddingHorizontal:10, paddingVertical:23, alignItems:"center", justifyContent:"center"}}>

<Text style={{color:selected === second ? "white" : "black"}}>{second}</Text>
</Pressable>

      </View>
    )
  }
export default SliderState
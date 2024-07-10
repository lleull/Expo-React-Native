import { View, Text } from 'react-native'
import React from 'react'

interface TypeHeader {
    title: String | null
}

const Header: React.FC <TypeHeader> = ({title}) => {
  return (
    <View style={{marginTop:40, height:80, width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"flex-start", gap:40}}>
      <View style={{width: 50 , height:5 , backgroundColor:"black"}}></View>
      <Text>{title}</Text>
    </View>
  )
}

export default Header
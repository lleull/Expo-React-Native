import { View, Text, Image } from 'react-native'
import React from 'react'
import AuthHook from '../../hook/Authhook'
// import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileComponent = ({ username }: any) => {
  const { handleloginuseraction } = AuthHook()
  return (
    <View style={{ height: 70, alignItems: "center", justifyContent: "space-between", width: "100%", flexDirection: "row" }}>
      {/* <Image source={}/> */}
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1, }}>


        <Text style={{ color: "#1affa", fontSize: 20, fontWeight: 900 }}>LeuLs</Text>
        <Ionicons name='md-checkmark-circle' size={32} color='green' />
      </View>
      {/* <AntDesign name="stepforward" size={24} color="black" />    */}
    </View>
  )
}

export default ProfileComponent
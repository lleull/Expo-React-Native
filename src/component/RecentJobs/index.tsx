import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
// import { Feather } from '@expo/vector-icons'

const RecentJobs = ({ data, index }: any) => {
  return (
    <View key={index} style={{
      width: "100%", paddingHorizontal: 10, height: 120, backgroundColor: index = 0 ? "red" : "white", marginBottom: 10, borderRadius: 15, shadowOpacity: 10,
      elevation: 5, // Android
      // shadowColor: '#000', // iOS
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 190,

    }}>

      <View style={{ flexDirection: "row", alignItems: "center", position: "relative" }}>
        <Image source={{ uri: data?.logoUri }} style={{ width: 45, backgroundColor: "red", marginTop: 10, borderRadius: 35, height: 45 }} />

        <View style={{ marginLeft: 5, }}>
          <Text style={{ color: "black", fontSize: 12, fontWeight: 700, }}>{data?.companyName}</Text>
          <Text style={{ color: "black" }}>Hello</Text>
        </View>
        {/* <Feather style={{position:"absolute", top:20, right:0}} name="bookmark" size={24} color="black" /> */}
      </View>

      <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
        <Pressable style={{ borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 11 }}>{data?.jobType}</Text>
        </Pressable>

        <Pressable style={{ borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 11 }}>Part Time</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: "#1199ff", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#ffffff", fontSize: 15 }}>Apply</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default RecentJobs
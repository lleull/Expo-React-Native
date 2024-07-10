import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
// import { Feather } from '@expo/vector-icons'

const JobCards = ({ data, index, navigation }: any) => {
  const handleItemClick = (data: any) => {
    navigation?.navigate('DETAILJOB', { data });
  };
  return (
    <Pressable onPress={() => handleItemClick(data)} style={{ width: 250, padding: 10, marginRight: 10, height: 150, backgroundColor: index === 0 ? "red" : "#1199ff", borderRadius: 15 }}>

      <View style={{ flexDirection: "row", alignItems: "center", position: "relative" }}>
        <Image source={{ uri: data?.logoUri }} style={{ width: 45, backgroundColor: "red", marginTop: 10, borderRadius: 35, height: 45 }} />

        <View style={{ marginLeft: 5, }}>
          <Text style={{ color: "white", fontSize: 12, fontWeight: 700, }}>{data?.companyName}</Text>
          <Text style={{ color: "white" }}>Hello</Text>
        </View>
        {/* <Feather style={{position:"absolute", top:20, right:0}} name="bookmark" size={24} color="white" /> */}
      </View>

      <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
        <Pressable style={{ backgroundColor: "#1a1a1a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
          <Text style={{ color: "#ffffff", fontSize: 11 }}>{data?.jobType}</Text>
        </Pressable>

        <Pressable style={{ backgroundColor: "#1a1a1a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
          <Text style={{ color: "#ffffff", fontSize: 11 }}>Part Time</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: "#1a1a1a", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
          <Text style={{ color: "#ffffff", fontSize: 11 }}>Part Time</Text>
        </Pressable>

      </View>
      <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
        <Text>{data?.salary}</Text>
        <Text>{data?.location}</Text>

      </View>

    </Pressable>
  )
}

export default JobCards
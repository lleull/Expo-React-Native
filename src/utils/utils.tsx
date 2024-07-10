import { StyleSheet, Text, View, Pressable, SafeAreaView, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import AuthHook from '../hook/Authhook'
import ProfileComponent from '../component/Profile'
import jobListings from './Dummywork'
import RecentJobs from '../component/RecentJobs'
import { auth } from '../config/Firebase'

const HomeScreen = ({ navigation }: any) => {
  const { userData, handleloginuseraction, handlelogoutaction } = AuthHook()


  const signOutUser = async () => {
    try {
      await auth.signOut(); // Call the signOut method
      console.log('User signed out successfully'); // Optional logging
    } catch (error) {
      console.error('Error signing out:', error); // Handle errors
    }
  };
  const JobCards = ({ data, index, onPress }: any) => {
    return (
      <Pressable onPress={() => signOutUser()} style={index === 0 ? styles.Cardstyle : styles.Cardstyle2}>

        <View style={{ flexDirection: "row", alignItems: "center", position: "relative" }}>
          <Image source={{ uri: data?.logoUri }} style={{ width: 45, backgroundColor: "red", marginTop: 10, borderRadius: 35, height: 45 }} />

          <View style={{ marginLeft: 5, }}>
            <Text style={{ color: "black", fontSize: 12, fontWeight: 700, }}>{data?.companyName}</Text>
            <Text style={{ color: "black" }}>Hello</Text>
          </View>
          {/* <Feather style={{ position: "absolute", top: 20, right: 0 }} name="bookmark" size={24} color="white" /> */}
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


  return (

    <ScrollView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>

      <ProfileComponent username={userData?.userName || userData?.username} />
      <View style={{ width: "100%", paddingVertical: 20, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <Text style={{ fontWeight: 900, fontSize: 24, color: "black" }}>Popular Jobs</Text>
        <Text style={{ fontWeight: 900, fontSize: 14, color: "gray" }}>see all</Text>

      </View>
      <View>
        <FlatList keyExtractor={((item: any) => item?.companyNames)} style={{ flex: 1, paddingVertical: 10 }}
          horizontal={true}
          data={jobListings}
          renderItem={({ item, index }) => (
            <JobCards
              onPress={() => {
                navigation?.navigate(
                  "DETAILJOB"
                )
              }}
              data={item}
              index={index}
            />
          )} />
      </View>
      <View style={{ width: "100%", paddingVertical: 20, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <Text style={{ fontWeight: 900, fontSize: 24, color: "black" }}>Recent Jobs lists</Text>
        <Text style={{ fontWeight: 900, fontSize: 14, color: "gray" }}>see all</Text>

      </View>
      <View>

        {/* <FlatList  keyExtractor={((item:any) => item?.companyNames)} style={{width:"100%", }}
      data={jobListings}
      renderItem={({ item }) => (
        <RecentJobs
        navigation={navigation}
        data={item}
        />
      )} /> */}
        {jobListings.map((items, index) => {
          return (
            <RecentJobs
              key={index}
              navigation={navigation}
              data={items}
            />
          )
        })}
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Btns: {
    marginTop: 40,
    paddingVertical: 10,
    marginLeft: 6,
    width: "95%",
    paddingHorizontal: 20,
    backgroundColor: "#ff00ff",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0
  },
  Cardstyle: {
    width: 250,
    padding: 10,
    marginRight: 10,
    height: 150,
    backgroundColor: "#99333f",
    borderRadius: 15
  },
  Cardstyle2: {
    width: 250,
    padding: 10,
    marginRight: 10,
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    shadowOpacity: 10,
    elevation: 5, // Android
    // shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 190,

  }
})
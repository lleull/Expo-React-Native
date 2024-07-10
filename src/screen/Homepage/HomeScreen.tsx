import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthHook from '../../hook/Authhook'
import ProfileComponent from '../../component/Profile'

import { auth, db } from '../../config/Firebase'
import { TextInput } from 'react-native-gesture-handler'
import CollectionOption from '../../component/collections'
import ParentInput from '../../component/ParentInput'
import { Colors } from '../../utils/colors'
// import { AntDesign, Ionicons } from '@expo/vector-icons'
import LeftShoppingCollection from '../../component/shopcollection'
import RighttShoppingCollection from '../../component/shopcollection/index2'
import ClothingData from '../../utils/Dummywork'
// import Header from '../component/Header'
const HomeScreen = ({ navigation }: any) => {
  const { userData, handleloginuseraction, handlelogoutaction } = AuthHook()
  const [searchinput, setsearchinput] = useState<string | undefined>("")

  const signOutUser = async () => {
    try {
      await auth.signOut(); // Call the signOut method
      console.log('User signed out successfully'); // Optional logging
    } catch (error) {
      console.error('Error signing out:', error); // Handle errors
    }
  };


  return (

    <ScrollView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <ProfileComponent username={userData?.userName || userData?.username} />
      <ParentInput auth={1}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>

          {/* <AntDesign style={{ marginHorizontal: 10, marginVertical: 5 }} name="search1" size={24} color="black" /> */}
          <TextInput placeholderTextColor="black" value={searchinput} onChangeText={(values) => setsearchinput(values)} placeholder="jobType" style={styles.Inputs} />
        </View>
        {/* <Ionicons style={{ marginHorizontal: 10, marginVertical: 5 }} name="filter-circle-sharp" size={24} color="black" /> */}
      </ParentInput>
      <View>


        <CollectionOption />
        <View style={{ flexWrap: "wrap", width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", gap: 10, flexGrow: 1, }}>

          {ClothingData.map((items, index) => {
            return (
              <>
                <LeftShoppingCollection items={items} index={index} />

              </>
            )
          })}

        </View>
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

  },
  Inputs: {
    paddingVertical: 10,

    flex: 1,
    backgroundColor: Colors.lightgray,
    borderRadius: 20,
    borderWidth: 0,


  },
})
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AuthHook from '../../hook/Authhook'
// import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../utils/colors';
const ProfileComponent = ({ username }: any) => {
  const { handleloginuseraction } = AuthHook()
  return (
    <LinearGradient style={styles.section} colors={['#8384BD', '#16175D']}>

      <View style={styles.section}  >
        <View style={styles.contain}>
          <View style={styles.profile}>
            <View style={styles.image}>

            </View>
            <View style={styles.textcontent}>
              <Text style={styles.title}>Hello Heli@2</Text>
              <Text style={styles.welcome}>Welcome back</Text>

            </View>
          </View>
          <View style={styles.image}>

          </View>
        </View>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  section: { height: 200, width: "100%", flexDirection: "row", alignItems: "flex-start", borderTopRightRadius: 20, borderTopLeftRadius: 20 },
  contain: {
    paddingHorizontal: 27,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginTop: 55,
  },
  profile: {

    flexDirection: "row"
  },
  image: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "blue"

  },
  textcontent: {
    marginLeft: 5,
  },
  title: {
    color: "#ffffff"

  },
  welcome: {
    color: "#AFAFBD",
    fontWeight: "600"
  }


})

export default ProfileComponent
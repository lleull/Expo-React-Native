import { Colors } from '../utils/colors'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'


const ParentInput = ({ children, auth }: any) => {
  return (


    <View style={auth == 1 ? styles.parentinput : styles.parentinput}>
      {children}

    </View>

  )
}


export default ParentInput




const styles = StyleSheet.create({


  parentinput: {
    marginBottom: 5,
    marginTop: 5,

    width: "100%",
    backgroundColor: Colors.lightgray,
    // borderTopRightRadius: 50,

    // borderRadius: 70,
    borderRadius: 10,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"

  },
  authinput: {
    marginBottom: 5,
    marginTop: 5,

    width: "100%",
    backgroundColor: "#325AB7",
    borderTopRightRadius: 50,

    borderRadius: 30,

    borderWidth: 0,
    color: "white"
  }

})
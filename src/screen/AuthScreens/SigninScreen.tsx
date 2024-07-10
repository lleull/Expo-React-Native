import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { handleAuthAction } from '../store/actions/AuthAction/authaction'
import { handleAuthAction } from '../../store/actions/AuthAction/authaction'
import AuthHook from '../../hook/Authhook'

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { setEmail, inputErrors, setPassword, email, password, handleloginuseraction, AuthLoading } = AuthHook()

  return (

    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
      {AuthLoading ? <View style={{ position: "absolute", zIndex: 10000, backgroundColor: "white", width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}><Text>Loading</Text></View> : ""}

      <View style={{ width: "100%", alignItems: "center", justifyContent: "center", paddingHorizontal: 10, backgroundColor: "#E1E0E0 " }}>
        <Text style={{ fontSize: 29, marginBottom: 15, width: "100%", textAlign: "center" }}>Log In</Text>
        <View style={{ width: "100%", flexDirection: "column", paddingHorizontal: 20, alignItems: "flex-start", justifyContent: "flex-start" }}>

          <View style={styles.parentinput}>

            <TextInput placeholderTextColor="black" value={email} onChangeText={(values) => setEmail(values)} placeholder="email" style={styles.Inputs} />

          </View>
          {inputErrors?.email ? <Text style={{ marginTop: 2, marginLeft: 15, color: "red", fontSize: 8, width: "100%", textAlign: "left", paddingHorizontal: 2, paddingVertical: 2 }}> {inputErrors?.email} </Text> : null}

          <View style={styles.parentinput}>


            <TextInput placeholderTextColor="black" value={password} onChangeText={(values) => setPassword(values)} placeholder="password" style={styles.Inputs} />

          </View>
          {inputErrors?.password ? <Text style={{ marginTop: 2, marginLeft: 15, color: "red", fontSize: 8, width: "100%", textAlign: "left", paddingHorizontal: 2, paddingVertical: 2 }}> {inputErrors?.password} </Text> : null}


          <Pressable onPress={(e) => handleloginuseraction(e)} style={styles.Btns}>

            <Text style={{ color: "#f3f3f3" }}>Sign In</Text>

          </Pressable>

          <Pressable style={styles.Buttons} onPress={() => navigation.navigate("SIGNUPSCREEN")}>
            <Text style={{ color: "#f3f3f3" }}>Register</Text>

          </Pressable>
          <Pressable onPress={() => navigation.navigate("SIGNINSCREEN")}>

            <Text style={{ width: "100%", marginTop: 10, fontWeight: 700, fontSize: 12, textAlign: "center" }}>Already have an account</Text>
          </Pressable>


        </View>
      </View>
    </SafeAreaView>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  Inputs: {
    paddingVertical: 10,
    marginLeft: 6,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#E1E0E0",
    borderBottomLeftRadius: 90,

    borderRadius: 20,
    borderWidth: 0,
    color: "black"

  },
  parentinput: {
    marginBottom: 5,
    marginTop: 5,

    width: "95%",
    backgroundColor: "#325AB7",
    borderTopRightRadius: 50,

    borderRadius: 30,

    borderWidth: 0,
    color: "white"
  },
  Btns: {
    marginTop: 40,
    paddingVertical: 20,
    marginLeft: 6,
    width: "95%",
    paddingHorizontal: 20,
    backgroundColor: "#1199ff",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0
  },
  Buttons: {
    marginTop: 10,
    paddingVertical: 20,
    marginLeft: 6,
    width: "95%",
    paddingHorizontal: 20,
    backgroundColor: "#090C11",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0
  }
})
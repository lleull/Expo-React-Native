import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { Images } from '../../assests/img/Image'
import { Colors } from '../../utils/colors'
const onBoardingScreen = ({ navigation }: any) => {
    return (
        <View style={{ alignItems: "center", flex: 1 }}>
            <Image style={{ flex: 1 }} source={Images.image1} alt='sd' />
            <View style={{ position: "absolute", bottom: 40, top: 300, left: "5%", right: "50%", width: "100%", height: "100%" }}>
                <Text style={{ fontWeight: 900, fontStyle: "italic", color: Colors.darkblue, fontSize: 48 }}>Best</Text>
                <Text style={{ fontWeight: 600, fontStyle: "italic", color: Colors.darkblue, fontSize: 38 }}>Styles</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("SIGNUPSCREEN")} style={{ borderRadius: 100, width: 70, height: 70, position: "absolute", bottom: 30, left: 20, backgroundColor: Colors.PrimaryBlue }} />
        </View>
    )
}

export default onBoardingScreen
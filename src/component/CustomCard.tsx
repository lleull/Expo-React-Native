import { StyleSheet, View, Text } from "react-native"
import { Colors } from "../utils/colors"


const CustomCard = ({ text }: any) => {
    return (
        <View style={styles.profile}>
            <View style={styles.image}>

            </View>
            <Text ellipsizeMode="tail" numberOfLines={3} style={styles.title}>{text}</Text>
            <View style={styles.image}>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    profile: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        width: "100%",
        backgroundColor: Colors.lightgray,
        gap: 20,
        overflow: 'hidden',
        alignItems: "center"

    },
    image: {
        width: 34,
        height: 34,
        borderRadius: 50,
        backgroundColor: "blue"

    },

    title: {
        color: Colors.darkblue,
        fontSize: 12
    },
    welcome: {
        color: "#AFAFBD",
        fontWeight: "600"
    }
})

export default CustomCard
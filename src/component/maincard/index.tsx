import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../../utils/colors'

const BalanceCard = () => {
    return (
        <View style={styles.section}>
            <View style={{ paddingHorizontal: 2 }}>

                <Text style={styles.graytitle}>YOUR BALANCE</Text>

                <View style={styles.textcontent}>
                    <Text style={styles.title}>Hello Heli@2</Text>
                    <View style={{ backgroundColor: "red", width: 10, height: 10, borderBottomLeftRadius: 80, borderBottomRightRadius: 80, }} />
                </View>
            </View>


            <View style={styles.options}>
                {[1, 2, 3, 4].map((items, index) => {
                    return (
                        <View key={index} style={styles.wrapper}>
                            <View style={styles.icon}>


                            </View>
                            <Text style={styles.texttitle}> BALANCE</Text>

                        </View>
                    )
                })}

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    section: {

        backgroundColor: "#fff",
        flex: 1, width: "100%",
        bottom: 70,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 15,

    },

    image: {
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: Colors.darkblue

    },
    textcontent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    title: {
        color: Colors.darkblue,
        fontWeight: "800"

    },
    graytitle: {
        color: "#AFAFBD",
        fontWeight: "600",
        fontSize: 15,
    },
    options: {
        width: "100%",

        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    wrapper: {
        gap: 10,
        alignItems: "center"
    },
    icon: {
        width: 27,
        height: 27,
        backgroundColor: Colors.green,
        borderRadius: 50,

    },
    texttitle: {
        color: "#AFAFBD",
        fontWeight: "600",
        fontSize: 12,
        marginLeft: 5
    },


})

export default BalanceCard
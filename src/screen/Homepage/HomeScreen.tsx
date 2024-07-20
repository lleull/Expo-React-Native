import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import ProfileComponent from '../../component/Profile'
import { Colors } from '../../utils/colors'
import BalanceCard from '../../component/maincard'
import CustomCard from '../../component/CustomCard'
const HomeScreen = ({ navigation }: any) => {

  return (

    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>

      <ProfileComponent />
      <View style={{ paddingHorizontal: 27 }}>
        <View style={styles.cardContainer}>

          <BalanceCard />

        </View>
        <CustomCard text="Lets Check Your Financial Insight of this Moth" />
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
  cardContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  }
})
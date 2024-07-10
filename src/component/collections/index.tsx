import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { CollectionData } from '../../utils/Collectiondata'
import { Colors } from '../../utils/colors'
import { ScrollView } from 'react-native-gesture-handler'
const CollectionOption = () => {

    return (
        <ScrollView style={{ flex: 1, paddingVertical: 10 }} horizontal={true} >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                {/* <Text style={{ borderRadius: 25, borderWidth: 1, borderColor: "red", color: Colors.darkblue, fontSize: 20, fontWeight: 700, marginHorizontal: 5, }}> New</Text> */}
                {CollectionData.map((items) => {
                    return (
                        <View key={items.id} style={{ marginLeft: 12, borderRadius: 25, borderWidth: 1, paddingVertical: 5, paddingHorizontal: 5, flexDirection: "column", justifyContent: "center", marginTop: 20, alignItems: "flex-start" }}>
                            {/* <Image style={{padding:10, width: 24, height: 24, borderRadius:50, borderColor:"black", borderWidth:1 }} source={img} alt='s' /> */}
                            <Text style={{ fontSize: 17, fontWeight: 500, color: Colors.darkblue }}>{items?.title}</Text>

                        </View>
                    )
                })}
            </View>

        </ScrollView>
    )
}


export default CollectionOption
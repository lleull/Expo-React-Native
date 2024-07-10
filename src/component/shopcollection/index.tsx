import { Text, View, Image } from 'react-native'
import React, { Component, useEffect } from 'react'
import { CollectionData } from '../../utils/Collectiondata'
import { Colors } from '../../utils/colors'
import { Images } from '../../assests/img/Image'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface types {
    items: any
}
const LeftShoppingCollection: React.FC<types> = (items) => {
    // caches

    useEffect(() => {
        console.log("Dadadad", items)

    }, [])
    const data = items.items

    return (
        <View style={{ position: "relative", flexGrow: 1, flexWrap: "wrap", width: "40%", height: 250, zIndex: 20, borderRadius: 20, }}>
            <Image source={data.logoUri} style={{ width: "100%", zIndex: -1, borderRadius: 10, height: "70%", objectFit: "cover" }} />
            <View style={{ borderRadius: 70, padding: 8, position: "absolute", top: 10, right: 5, alignItems: "center", justifyContent: "center", backgroundColor: Colors.lightblue }}>
                <AntDesign name="hearto" size={24} color="black" />
                <MaterialCommunityIcons name="account-heart" size={24} color="black" />
            </View>

            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                <View>
                    <Text style={{ fontStyle: "italic", fontSize: 18 }}>{data.title}</Text>
                    <Text style={{ fontStyle: "italic", fontSize: 18 }}>${data.price}</Text>
                </View>
            </View>
        </View>
    )
}


export default LeftShoppingCollection
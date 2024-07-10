import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { CollectionData } from '../../utils/Collectiondata'
import { Colors } from '../../utils/colors'
import { Images } from '../../assests/img/Image'

const RighttShoppingCollection = (index: any, data) => {

    console.log(index)
    return (
        <View style={{ marginTop: 3, flexGrow: 1, width: "40%", height: 250, backgroundColor: Colors.lightgray, zIndex: 20, borderRadius: 20, }}>
            <Image source={data.logoUri} style={{ width: "100%", zIndex: -1, borderRadius: 10, height: "70%", objectFit: "cover" }} />
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                <View>

                    <Text style={{ fontStyle: "italic", fontSize: 18 }}>Sweatshirt</Text>
                    <Text style={{ fontStyle: "italic", fontSize: 18 }}>$24.46</Text>
                </View>
            </View>
        </View>
    )
}


export default RighttShoppingCollection
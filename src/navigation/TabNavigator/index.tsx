import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../screen/Homepage/HomeScreen";
import SearchScreen from "../../screen/searchscreen";
import ChatScreen from "../../screen/chatscreen";
import SavedScreen from "../../screen/savedscreen";
import JobDetailScreen from "../../screen/jobdetailsscreen";
import JobPostScreen from "../../screen/Addpost";
import { Colors } from "../../utils/colors";
import { ProfileStack } from "../stackNavigation";

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarOptions: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 50,
    shadowColor: "#1a1a1a",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

import { View, Text, Pressable } from 'react-native';
import React from 'react';

const HeaderTitle = ({ goBack, title }) => {
  return (
    <View style={{ height: 90, marginTop: 20, alignItems: "center", width: "100%", flexDirection: "row" }}>
      <Text style={{ fontSize: 18, marginLeft: 80, letterSpacing: 2 }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

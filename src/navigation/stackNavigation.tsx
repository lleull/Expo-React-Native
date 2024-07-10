import React from 'react';
import SignupScreen from '../screen/AuthScreens/SignupScreen';
import OnBoardingScreen from '../screen/onboardings/OnBoardingScreen';
import HomeScreen from '../screen/Homepage/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import AuthHook from '../hook/Authhook';
import SigninScreen from '../screen/AuthScreens/SigninScreen';
import TabNavigator from './TabNavigator';
import JobDetailScreen from '../screen/jobdetailsscreen';
import { AddNewPost } from '../store/actions/PostsAction';
import JobPostScreen from '../screen/Addpost';
import onBoardingScreen from '../screen/boardingScreen';
const Stack = createStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="tabScreens" component={TabNavigator} /> */}
      <Stack.Screen name="HOMESCREEN" component={HomeScreen} />
      <Stack.Screen name="DETAILJOB" component={JobDetailScreen} />
    </Stack.Navigator>
  );
};


const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator >

      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={SigninScreen} />
    </Tab.Navigator>
  );
}


export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="ONBOARDINGSCREEN" component={onBoardingScreen} />
      <Stack.Screen name="SIGNUPSCREEN" component={HomeScreen} />
      <Stack.Screen name="SIGNINSCREEN" component={HomeScreen} />

    </Stack.Navigator>
  );
};

export const StackNavigation = () => {
  const { userData } = AuthHook()
  if (userData) {
    return <HomeStack />;
  } else {
    return <ProfileStack />;
  }
};

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    return;
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}



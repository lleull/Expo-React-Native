import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/Homepage/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import SignupScreen from './src/screen/AuthScreens/SignupScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MyTabs, StackNavigation } from './src/navigation/stackNavigation';
import configureStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import rootSaga from './src/store/sagas/rootsagas';

import { useState } from 'react';
const Stack = createStackNavigator();

export default function App() {
  const { persistor, store } = configureStore();
  store.runSaga(rootSaga);



  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <MyTabs />
          {/* <StackNavigation /> */}
          <PersistGate loading={null} persistor={persistor} />
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});

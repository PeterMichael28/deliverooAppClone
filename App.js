import { StatusBar } from 'expo-status-bar';
import { useState } from "react";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import 'react-native-url-polyfill/auto';
import RestaurantsScreen from './screens/RestaurantsScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CartScreen from './screens/CartScreen';
import PreparingScreen from './screens/PreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {

 return (
  <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
         gestureEnabled: true
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
         <Stack.Screen name="Cart" component={ CartScreen }
           options={{presentation: 'modal', animation: 'slide_from_bottom', headerShown: false}}
         />
         <Stack.Screen name="PreparingOrder" component={PreparingScreen }
           options={{presentation: 'fullScreenModal', animation: 'slide_from_bottom', headerShown: false}}
         />   
         <Stack.Screen name="Delivery" component={DeliveryScreen }
           options={{presentation: 'fullScreenModal', animation: 'slide_from_bottom', headerShown: false}}
         />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
 );
}



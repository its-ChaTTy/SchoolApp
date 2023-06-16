import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home'; 
import FeeScreen from '../screens/Fee'; 
import Feather from 'react-native-vector-icons/Feather'
import Entypo  from 'react-native-vector-icons/Entypo'


const Tab = createBottomTabNavigator();

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help Screen</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Fee" component={FeeScreen} tabBarIcon={() => (
        <Entypo name="location-pin" size={24} color="#7b7979" />
        )} />
        <Tab.Screen name="Home" component={HomeScreen} tabBarIcon={() => (
          <Feather name="home" size={24} color="#7b7979" />
        )} />
      <Tab.Screen name="Help" component={HelpScreen} tabBarIcon={() => (
        <Entypo name="help-with-circle" size={24} color="#7b7979" />
      )} />
    </Tab.Navigator>
  );
}

export default MyTabs;

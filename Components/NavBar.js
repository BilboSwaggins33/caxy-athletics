import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import CheckIn from "../Screens/CheckIn";
import Home from "../Screens/Home";
import Social from "../Screens/Social";
import Rewards from "../Screens/Rewards";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavBar({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let type;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Check In") {
            iconName = focused ? "ios-location" : "ios-location-outline";
          } else if (route.name === "Social") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Rewards") {
            iconName = focused ? "trophy" : "trophy-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#F37121",
        tabBarStyle: {
          height: 85,
          paddingTop: 10,
          borderTopWidth: 1,
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 20,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Check In" component={CheckIn} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Social" component={Social} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

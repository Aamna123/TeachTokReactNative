import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, ImageBackground, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ActivityScreen from "./screens/ActivityScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
const timerImage = require("./assets/Timer.png");
import { useState, useEffect } from "react";
import { MCQResponse } from "./types";
import { DataProvider } from "./DataProvider";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelPosition: "below-icon",

            tabBarShowLabel: true,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={24} color={color} />
              ),

              header: () => (
                <ImageBackground
                  source={require("./assets/background.png")}
                  style={{
                    height: 0,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>Hellworld</Text>
                  </View>
                </ImageBackground>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "My Profile",
              tabBarIcon: ({ color }) => (
                <Ionicons name="search-outline" size={24} color={color} />
              ),
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Activity"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="ios-timer-outline" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="bookmark" size={30} color={color} />
              ),

              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

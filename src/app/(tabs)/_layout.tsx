import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import {
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import CustomText from "@/src/components/CustomText";

const TabsLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "#FFA726",
          borderColor: "white",
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#FFA726",
        },
        headerTitleStyle: {
          color: "white",
          fontFamily: "Poppins-SemiBold",
          fontSize: 24,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#FFD888",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          header: () => (
            <View className="h-18 border-black border- px-4 py-1 pl-5 bg-primary flex flex-row justify-between items-center">
              <View className="flex flex-row items-center space-x-4">
                <TouchableOpacity activeOpacity={0.8}>
                  <View className="flex items-center justify-center w-10 h-10 bg-[#fff8eb4a] rounded-lg">
                    <Entypo name="menu" size={40} color="white" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <View className="flex items-center justify-center w-10 h-10 bg-[#fff8eb4a] rounded-lg">
                    <Ionicons
                      name="notifications"
                      size={28}
                      color="white"
                      className="absolute"
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex flex-row items-center space-x-1">
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="flex flex-row items-center space-x-4"
                >
                  <View>
                    <CustomText className="text-white text-xs text-right">
                      Selamat pagi,
                    </CustomText>
                    <CustomText className="text-white text-base font-poppinsSemiBold">
                      Yogi Permana
                    </CustomText>
                  </View>

                  <Image
                    source={require("../../assets/images/user.png")}
                    className="w-14 h-14 rounded-full ml-3"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ),
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
          tabBarButton: ({ onPress, accessibilityState, children }) => (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={1} 
              accessibilityState={accessibilityState}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="(forum)"
        options={{
          header: () => (
            <View className="bg-primary px-2 py-3 flex flex-row items-center relative">
              <TextInput
                className={`bg-white rounded-lg mx-2 text-gray-700 font-poppinsRegular pl-12 flex-1 text-sm h-11 leading-none ${
                  Platform.OS === "android" ? "py-0" : ""
                }`}
                onChangeText={setSearchText}
                value={searchText}
                placeholder="Search forum.."
                maxLength={40}
                placeholderTextColor="#666"
                returnKeyType="search"
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Search Icon */}
              <View className="absolute left-8 top-1/2 -translate-y-1/2">
                <FontAwesome name="search" size={18} color="gray" />
              </View>

              {/* Filter Button */}
              <TouchableOpacity
                className="flex-[0.15]"
                activeOpacity={0.8}
                // onPress={onFilterPress}
              >
                <View className="flex-grow flex justify-center items-center">
                  <Ionicons name="filter" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          ),
          title: "Forum",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="book" size={size} color={color} />
          ),
          tabBarButton: ({ onPress, accessibilityState, children }) => (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={1} // Remove ripple effect
              accessibilityState={accessibilityState}
              className="flex-1 justify-center items-center"
            >
              {children}
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" size={size} color={color} />
          ),
          tabBarButton: ({ onPress, accessibilityState, children }) => (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={1} // Remove ripple effect
              accessibilityState={accessibilityState}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

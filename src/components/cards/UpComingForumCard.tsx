import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import CustomText from "../CustomText";

const UpComingCard = () => {
  return (
    <View className="w-full h-64 rounded-xl p-3 flex justify-between bg-white border-[#EFEFEF] border-2 shadow-s shadow-black">
      <View className="relative w-full h-1/2">
        <Image
          source={require("../../assets/images/forum_background.png")}
          className="w-full h-full rounded-lg"
        />
        <View className="absolute inset-0 bg-[#0000002a] rounded-lg" />
        <View className="absolute inset-0 flex flex-col justify-end p-2">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center bg-white rounded-lg px-3 py-1 space-x-2">
              {/* Icon */}
              <MaterialIcons name="article" size={20} color="black" />

              <CustomText className="font-poppinsSemiBold text-base leading-none">
                Papua Merdeka
              </CustomText>
            </View>
            <View className="flex flex-row items-center justify-center space-x-2 rounded-lg px-2 py-1 bg-white">
              <FontAwesome name="star" color="orange" size={14} />
              <CustomText className="text-sm leading-none text-black">
                5
              </CustomText>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 flex flex-row justify-between items-center gap-2">
        {/* Mentor Section */}
        <View className="flex flex-row items-center space-x-2 flex-1 border-l-4 border-primary bg-[#fff8eb] rounded-md p-2">
          <Image
            source={require("../../assets/images/user2.png")}
            className="w-7 h-7 rounded-full"
          />
          <View>
            <CustomText className="text-sm font-semibold">Mentor</CustomText>
            <CustomText className="text-[11px] text-gray-500">
              Budiono Siregar
            </CustomText>
          </View>
        </View>

        {/* Date and Time Section */}
        <View className="flex flex-row items-center space-x-2 flex-1 border-l-4 border-primary bg-[#fff8eb] rounded-md p-2">
          <View className="w-7 h-7 bg-[#ffbe5d] rounded-full flex items-center justify-center">
            <FontAwesome name="calendar" size={16} color="white" />
          </View>
          <View>
            <CustomText className="text-sm font-semibold">Jadwal</CustomText>
            <CustomText className="text-[11px] text-gray-500">
              Minggu, 20 Jan 2025
            </CustomText>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity activeOpacity={0.8}>
        <View className="bg-primary rounded-lg p-2 flex items-center justify-center">
          <CustomText className="text-white">Details</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpComingCard;

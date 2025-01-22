import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const PopulerForumCard = () => {
  const router = useRouter();
  return (
    <View className="w-44 h-56 rounded-xl p-2 mr-2 flex gap-y-1 bg-white border-[#EFEFEF] border-2 shadow-sm shadow-black">
      <Image
        source={require("../../assets/images/forum_background2.png")}
        className="w-full h-1/2 rounded-lg"
      />
      <View className="flex flex-row items-center rounded-lg space-x-1">
        <CustomText className="text-sm leading-none">Papua Merdeka</CustomText>
      </View>
      <View className="flex-grow flex justify-around">
        <View className="flex flex-row items-center justify-between">
          <CustomText className="text-[11px] leading-none">
            Rp. 45.000/meet
          </CustomText>
          <View className="flex flex-row items-center justify-center space-x-2">
            <FontAwesome name="star" color="orange" size={14} />
            <CustomText className="text-sm leading-none text-black">
              5
            </CustomText>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/forum_details")}>
          <View className="bg-primary rounded-lg p-1 space-x-2 flex flex-row items-center justify-center">
            <CustomText className="text-white">Join</CustomText>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopulerForumCard;

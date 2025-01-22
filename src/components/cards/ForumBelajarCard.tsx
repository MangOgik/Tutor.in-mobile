import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ForumBelajarCard = () => {
  return (
    <View className="w-96 h-32 p-2 bg-white border-[#EFEFEF] border-2 shadow-sm shadow-black rounded-2xl mt-4 flex flex-row items-center">
      <Image
        source={require("@/src/assets/images/forum_background3.png")}
        className="w-24 h-28 rounded-xl"
        resizeMode="cover"
      />
      <View className="flex flex-col ml-4 h-full justify-between flex-grow">
        <CustomText className="font-poppinsBold text-lg text-gray-800">
          Papua Merdeka
        </CustomText>
        <CustomText
          className="text-gray-600 text-sm "
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          Lorem ipsum odor amet, adipiscie{"\n"}elit. Nibh imperdiet facilisi
          nostra{"\n"} dictum turpis fusce.
        </CustomText>
        <View className="flex flex-row items-center justify-between ">
          <View className="flex flex-row items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FontAwesome
                  key={index}
                  name={index < 4 ? "star" : "star-o"}
                  size={16}
                  color="#f59e0b"
                  className="mr-1"
                />
              ))}
            <CustomText className="text-gray-500 text-xs ml-2">
              (4.0)
            </CustomText>
          </View>
          <View className="flex flex-row justify-end">
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-primary rounded-full p-2 space-x-1 mr-2 flex flex-row items-center justify-center"
            >
              <CustomText className="text-white text-xs font-poppinsBold">
                Join Forum
              </CustomText>
              <AntDesign name="arrowright" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForumBelajarCard;

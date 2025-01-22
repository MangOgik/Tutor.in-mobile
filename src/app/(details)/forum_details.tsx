import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import CustomText from "@/src/components/CustomText";
import { useRouter } from "expo-router";
import Animated, { FadeInUp, SlideInDown, SlideInUp } from "react-native-reanimated";

const ForumDetails = () => {
  const router = useRouter();
  return (
    <View  className="w-full h-full bg-white flex">
      <ScrollView
        className="flex-1 bg-white pb-96"
        showsVerticalScrollIndicator={false}
      >
        <View className="relative w-full h-96">
          {/* Background Image */}
          <Animated.Image
            source={require("@/src/assets/images/forum_background2.png")}
            className="w-full h-full"
            sharedTransitionTag="forum-image"
            resizeMode="cover"
          />

          {/* Back Button */}
          <TouchableOpacity
            className="absolute top-5 left-5 bg-black/50 p-2 rounded-full"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Animated.View entering={SlideInDown.duration(600)} className="p-4 bg-white -mt-4 rounded-t-3xl">
          {/* Judul Forum */}
          <View className="flex flex-row items-center rounded-lg space-x-2 py-2 mb-2">
            <MaterialIcons name="article" size={24} color="black" />
            <CustomText className="text-2xl font-poppinsSemiBold leading-none">
              Papua Merdeka
            </CustomText>
          </View>

          {/* Kode dan Harga Forum */}
          <View className="border-b border-t border-gray-200 py-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 bg-[#ffbe5d] rounded-full flex items-center justify-center">
                  <MaterialCommunityIcons
                    name="qrcode-scan"
                    size={24}
                    color="white"
                  />
                </View>

                <View className="ml-3">
                  <CustomText className="text-sm font-poppinsSemiBold">
                    ID Forum
                  </CustomText>
                  <CustomText className="">001203</CustomText>
                </View>
              </View>
              <View className="flex-row items-center flex-1">
                <View className="w-11 h-11 bg-[#ffbe5d] rounded-full flex items-center justify-center">
                  <Entypo name="price-tag" size={24} color="white" />
                </View>
                <View className="ml-3">
                  <CustomText className="text-sm font-poppinsSemiBold">
                    Harga
                  </CustomText>
                  <View className="flex-row items-center">
                    <CustomText className="">Rp 150.000,-</CustomText>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Data Pengajar */}
          <View className="border-b border-gray-200 py-4 mb-4">
            <CustomText className="text-base mb-4 font-poppinsBold">
              Data Pengajar
            </CustomText>
            <View className="flex flex-row ">
              <Image
                source={require("@/src/assets/images/user2.png")}
                className="w-20 h-20 "
                resizeMode="cover"
              />
              <View className="flex-1 ml-3">
                <CustomText className="text-base font-poppinsSemiBold">
                  Budiono Siregar
                </CustomText>
                <CustomText className="text-gray-700">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh
                  imperdiet facilisi nostra dictum turpis fusce.
                </CustomText>
                <View className="flex flex-row items-center justify-between mt-2">
                  <View className="flex flex-row items-center justify-center p-2 space-x-2 border border-gray-200 rounded-lg w-14">
                    <FontAwesome name="star" color="orange" size={16} />
                    <CustomText className="text-sm leading-none text-black">
                      5
                    </CustomText>
                  </View>
                  <TouchableOpacity activeOpacity={0.8}>
                    <View className="flex flex-row items-center justify-center bg-[#5CB85C] rounded-lg p-2 space-x-3">
                      <FontAwesome name="whatsapp" color="white" size={16} />
                      <CustomText className="text-white text-sm ml-1">
                        Hubungi sekarang
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Deskripsi Forum */}
          <View className="mb-4">
            <CustomText className="text-base mb-2 font-poppinsBold">
              Deskripsi Forum
            </CustomText>

            <View className="pl-2">
              {/* Each bullet point uses flex-row for the dot and text alignment */}
              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  20 Jam total pembelajaran .
                </CustomText>
              </View>

              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  Online/Offline meeting.
                </CustomText>
              </View>

              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  Boleh bertanya via chat diluar jam meeting (selama course
                  berlangsung)
                </CustomText>
              </View>

              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  Komunikasi via grup whatsapp.
                </CustomText>
              </View>

              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  Jadwal meeting ditentukan paling lambat h-1 hari (online) dan
                  h-3 hari (offline).
                </CustomText>
              </View>

              <View className="flex-row">
                <CustomText className="text-gray-500 mr-2">•</CustomText>
                <CustomText className="text-gray-700 flex-1">
                  Maksimal 3 pelajar untuk sekali pembayaran.
                </CustomText>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Bottom Action Bar */}
      </ScrollView>
      <View className="flex-row items-center justify-between p-3 px-4 border-t border-gray-200 bg-white">
        <TouchableOpacity
          className="flex-1 bg-primary py-3 rounded-lg"
          activeOpacity={0.8}
        >
          <CustomText className="text-white text-center font-semibold">
            Beli Sekarang
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForumDetails;

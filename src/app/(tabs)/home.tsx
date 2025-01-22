import CustomText from "@/src/components/CustomText";
import FieldCard from "@/src/components/cards/FieldCard";
import PopulerForumCard from "@/src/components/cards/PopulerForumCard";
import UpComingForumCard from "@/src/components/cards/UpComingForumCard";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";

const Home = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  function handleSearchTextChange(text: string): void {
    setSearchText(text);
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View className="w-full h-full flex items-center bg-white">
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full flex-1"
        >
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
          <View className="w-full px-3 mt-5 flex flex-row justify-between">
            <CustomText className="font-poppinsSemiBold text-base">
              Forum Mendatang
            </CustomText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/(forum)/my_forum")}
              className="flex flex-row items-center "
            >
              <CustomText className="text-sm">Lihat semua</CustomText>
              <View className="flex justify-center items-center size-5">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="px-3 mt-2">
            <UpComingForumCard />
          </View>
          <View className="w-full px-3 mt-5 flex flex-row justify-between">
            <CustomText className="font-poppinsSemiBold text-base">
              Kategori Forum
            </CustomText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/(forum)/forum")}
              className="flex flex-row items-center "
            >
              <CustomText className="text-sm">Lihat semua</CustomText>
              <View className="flex justify-center items-center size-5">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-3 mt-2 py-1"
          >
            <FieldCard fieldName="Matematika" />
            <FieldCard fieldName="Bahasa" />
            <FieldCard fieldName="Ilmu Sosial" />
            <FieldCard fieldName="Teknologi Informasi" />
            <FieldCard fieldName="Kesenian" />
            <FieldCard fieldName="Keterampilan" />
          </ScrollView>

          <View className="w-full px-3 mt-5 flex flex-row justify-between">
            <CustomText className="font-poppinsSemiBold text-base">
              Forum Ter-Populer
            </CustomText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/(forum)/forum")}
              className="flex flex-row items-center "
            >
              <CustomText className="text-sm">Lihat semua</CustomText>
              <View className="flex justify-center items-center size-5">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-3 mt-2 mb-2 py-1"
          >
            <PopulerForumCard />
            <PopulerForumCard />
            <PopulerForumCard />
            <PopulerForumCard />
          </ScrollView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Home;

import {
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../components/CustomText";

const Index = () => {
  const router = useRouter();

  return (
    <View className="h-full">
      <LinearGradient
        colors={["transparent", "#FFA726"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.6 }}
        className="absolute w-full h-full"
      >
        <Image
          source={require("../assets/images/study_group.png")}
          className="w-full h-3/5 -z-10 "
        />
        <View className="h-2/5 flex justify-between py-8">
          <View className="px-6">
            <CustomText className="text-left font-poppinsExtraBold text-white text-3xl">
              Jadi Mahasiswa Jangan Sampai Nggak Ngerti Materi!
            </CustomText>
            <CustomText className="text-white font-poppinsSemiBold text-md">
              #UntungAdaTutorin
            </CustomText>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white p-4 mx-6 rounded-full flex items-center justify-center"
            onPress={() => router.push("/login")}
          >
            <CustomText className="text-center font-poppinsSemiBold text-lg">
              Daftar Sekarang
            </CustomText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Index;

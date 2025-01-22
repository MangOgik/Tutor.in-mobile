import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { useRouter } from "expo-router";

const FieldCard = ({ fieldName }: { fieldName: string }) => {
  const router = useRouter();
  return (
    <TouchableWithoutFeedback onPress={() => router.push("/forum_details")}>
      <View className="w-fit rounded-3xl p-2 px-5 mr-2 flex items-center justify-center gap-y-1 bg-[#ffd888] border-[#EFEFEF] border-2 shadow-sm shadow-black">
        <CustomText className="text-xs">{fieldName}</CustomText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FieldCard;

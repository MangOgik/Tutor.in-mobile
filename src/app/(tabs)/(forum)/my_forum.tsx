import ForumSayaCard from "@/src/components/cards/ForumSayaCard";
import React from "react";
import { View, ScrollView } from "react-native";

const MyForum = () => {
  const viewsArray = Array.from({ length: 20 }); // Create an array with 20 items for example

  return (
    <View className="w-full h-full flex justify-center items-center bg-white">
      <ScrollView>
        {viewsArray.map((_, index) => (
          <ForumSayaCard key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyForum;

import ForumBelajarCard from "@/src/components/cards/ForumBelajarCard";
import React from "react";
import { View, ScrollView } from "react-native";

const Forum = () => {
  const viewsArray = Array.from({ length: 20 });

  return (
    <View className="w-full h-full flex justify-center items-center bg-white">
      <ScrollView>
        {viewsArray.map((_, index) => (
          <ForumBelajarCard key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Forum;

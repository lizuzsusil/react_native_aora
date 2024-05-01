import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">
        Bookmarked Videos
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;

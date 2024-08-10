import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
          <Image className="h-96 flex w-full" source={images.profile} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;

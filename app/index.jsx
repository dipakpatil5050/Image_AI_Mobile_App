import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo2}
            className="w-60 h-28"
            resizeMode="contain"
          />
          <Image
            source={images.erp}
            className="max-w-[380px] w-full h-[250px]"
            resizeMode="contain"
          />
          <View className="realtive mt-5 ">
            <Text className="text-3xl text-white font-bold text-center">
              Discover limitless opportunities with excellence{" "}
              <Text className="text-secondary-200">ERP</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where efficiency meets innovation: Unlock the potential of your
            business with Syspro ERP
          </Text>

          <CustomButton
            title="Continue with Login"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

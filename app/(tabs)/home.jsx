import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const videos = [
    {
      id: "1",
      title: "Get inspired to code",
      thumbnail: "https://i.ibb.co/tJBcX20/Appwrite-video.png",
      video: "https://player.vimeo.com/video/949579770?h=897cd5e781",
      prompt:
        "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
    },
    {
      id: "2",
      title: "How AI Shapes Coding Future",
      thumbnail: "https://i.ibb.co/Xkgk7DY/Video.png",
      video: "https://player.vimeo.com/video/949581999?h=4672125b31",
      prompt: "Picture the future of coding with AI. Show AR VR",
    },
    {
      id: "3",
      title: "Dalmatian's journey through Italy",
      thumbnail: "https://i.ibb.co/CBYzyKh/Video-1.png",
      video: "https://player.vimeo.com/video/949582778?h=d60220d68d",
      prompt:
        "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
    },
    {
      id: "4",
      title: "Meet small AI friends",
      thumbnail: "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
      video: "https://player.vimeo.com/video/949616422?h=d60220d68d",
      prompt:
        "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
    },
    {
      id: "5",
      title: "Find inspiration in Every Line",
      thumbnail: "https://i.ibb.co/mGfCYJY/Video-2.png",
      video: "https://player.vimeo.com/video/949617485?h=d60220d68d",
      prompt:
        "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
    },
    {
      id: "6",
      title: "Japan's Blossoming temple",
      thumbnail: "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
      video: "https://player.vimeo.com/video/949618057?h=d60220d68d",
      prompt:
        "Create a captivating video journey through Japan's Sakura Temple",
    },
    {
      id: "7",
      title: "A Glimpse into Tomorrow's VR World",
      thumbnail: "https://i.ibb.co/C5wXXf9/Video-3.png",
      video: "https://player.vimeo.com/video/949620017?h=d60220d68d",
      prompt: "An imaginative video envisioning the future of Virtual Reality",
    },
    {
      id: "8",
      title: "A World where Ideas Grow Big",
      thumbnail: "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
      video: "https://player.vimeo.com/video/949620200?h=d60220d68d",
      prompt:
        "Make a fun video about hackers and all the cool stuff they do with computers",
    },
  ];

  // const DATA = [
  //   {
  //     id: "1",
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: "2",
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: "3",
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: "4",
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "5",
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: "6",
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "7",
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: "8",
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: "9",
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: "10",
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "11",
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: "12",
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "13",
  //     title: "KAJU KATLI WITHOUT WARAKH & MAWA",
  //     desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "500",
  //   },
  //   {
  //     id: "14",
  //     title: "MOHAN THAL",
  //     desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
  //     alt: "image not showing",
  //     price: "113",
  //   },
  //   {
  //     id: "15",
  //     title: "Punch Rose WARAKH & MAWA",
  //     desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
  //     alt: "image not showing",
  //     price: "480",
  //   },
  //   {
  //     id: "16",
  //     title: "ADADIYA PAK",
  //     desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "17",
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: "18",
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  //   {
  //     id: "19",
  //     title: "BUY ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "COW GHEE Desciption is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
  //     alt: "image not showing",
  //     price: "1800",
  //   },
  //   {
  //     id: "20",
  //     title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
  //     desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
  //     src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
  //     alt: "image not showing",
  //     price: "700",
  //   },
  // ];

  // const [data, setData] = useState(DATA);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await getAllPosts();
  //     } catch (error) {
  //       Alert.alert("Error", error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  // }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary  h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-gray-100">
                  Dipak
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  className="w-52 h-11 ml-14"
                  resizeMode="contain"
                  source={images.logo2}
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8 ">
              <Text className="text-gray-100 font-pregular text-lg mb-3">
                Letest Content
              </Text>

              <Trending posts={videos} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Content Found"
            subtitle="be the first one to upload content "
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

import {
  View,
  Text,
  FlatList,
  ScrollView,
  Button,
  Image,
  Alert,
} from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";

const Home = () => {
  const names = [
    {
      id: "1",
      title: "KAJU KATLI WITHOUT WARAKH & MAWA",
      desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "500",
    },
    {
      id: "2",
      title: "MOHAN THAL",
      desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
      alt: "image not showing",
      price: "113",
    },
    {
      id: "3",
      title: "Punch Rose WARAKH & MAWA",
      desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
      alt: "image not showing",
      price: "480",
    },
    {
      id: "4",
      title: "ADADIYA PAK",
      desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "5",
      title: "BUY ORGANIC A2 GIR DESI COW GHEE",
      desc: "COW GHEE Desciption is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
      alt: "image not showing",
      price: "1800",
    },
    {
      id: "6",
      title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
      desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "7",
      title: "KAJU KATLI WITHOUT WARAKH & MAWA",
      desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "500",
    },
    {
      id: "8",
      title: "MOHAN THAL",
      desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
      alt: "image not showing",
      price: "113",
    },
    {
      id: "9",
      title: "Punch Rose WARAKH & MAWA",
      desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
      alt: "image not showing",
      price: "480",
    },
    {
      id: "10",
      title: "ADADIYA PAK",
      desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "11",
      title: "BUY ORGANIC A2 GIR DESI COW GHEE",
      desc: "COW GHEE Desciption is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
      alt: "image not showing",
      price: "1800",
    },
    {
      id: "12",
      title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
      desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "13",
      title: "KAJU KATLI WITHOUT WARAKH & MAWA",
      desc: "Dryfruit Punch Rose is a classic premium sweet from Gujarat,",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "500",
    },
    {
      id: "14",
      title: "MOHAN THAL",
      desc: "Mohan thal is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/products/1_1066x.jpg?v=1690262514",
      alt: "image not showing",
      price: "113",
    },
    {
      id: "15",
      title: "Punch Rose WARAKH & MAWA",
      desc: "DRYFRUIT PUNCH ROSE Description and many more thing",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint78_1880x.jpg?v=1690267171",
      alt: "image not showing",
      price: "480",
    },
    {
      id: "16",
      title: "ADADIYA PAK",
      desc: "addidya pak is a traditional ancient sweet from Gujarat Kathiyawad",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317https://haribadairyfarm.com/cdn/shop/files/fpoint711_1880x.jpg?v=1690267317",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "17",
      title: "BUY ORGANIC A2 GIR DESI COW GHEE",
      desc: "COW GHEE Desciption is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
      alt: "image not showing",
      price: "1800",
    },
    {
      id: "18",
      title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
      desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
      alt: "image not showing",
      price: "700",
    },
    {
      id: "19",
      title: "BUY ORGANIC A2 GIR DESI COW GHEE",
      desc: "COW GHEE Desciption is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/fpoint74_1880x.jpg?v=1690184306",
      alt: "image not showing",
      price: "1800",
    },
    {
      id: "20",
      title: "Ghee ORGANIC A2 GIR DESI COW GHEE",
      desc: "DRYFRUIT PUNCH ROSE is a traditional ancient",
      src: "https://haribadairyfarm.com/cdn/shop/files/dry-fruits-nutritional-punch_870x.jpg?v=1683108223",
      alt: "image not showing",
      price: "700",
    },
  ];
  

  const submit = () => {
    Alert.alert("Buy successfully");
  };

  const cart = () => {
    Alert.alert("add to cart successfully");
  };

  return (
    <View>
      <FlatList
        keyExtractor={(key) => {
          return key.id;
        }}
        data={names}
        renderItem={({ item, index }) => {
          return (
            <>
              <View>
                <Image className="w-full h-64" source={{ uri: item.src }} />
              </View>
              <Text className="ml-5 mt-5 font-pmedium text-2xl">
                {index}. {item.title}
              </Text>
              <Text className="ml-5 mb-3 mt-5 font-pmedium text-2xl">
                Rs {item.price}
              </Text>
              <View className="w-full bg-gray-200">
                <Button onPress={submit} className="rounded-2xl" title="Buy" />
              </View>
              <View className="w-full bg-gray-200">
                <Button
                  onPress={cart}
                  color="gray"
                  className="rounded-2xl"
                  title="add to cart"
                />
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default Home;

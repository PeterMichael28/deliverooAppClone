import {
 View,
 Text,
 TouchableOpacity,
 Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../features/RestaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
 const navigation = useNavigation();

 const restaurants = useSelector(selectRestaurants);
 return (
  <View className="bg-[#00ccbb] flex-1">
   <SafeAreaView className="z-50">
    <View className="flex-row justify-between items-center p-5">
     <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
     >
      <XMarkIcon color="white" size={30} />
     </TouchableOpacity>
     <Text className="text-light text-white text-lg">
      Order Help
     </Text>
    </View>

    <View className="bg-white mx-5 my-2 rounded-md z-50 p-6 shadow-lg">
     <View className="flex-row justify-between">
      <View>
       <Text className="text-lg text-gray-400">
        Estimated Arrival
       </Text>
       <Text className="text-4xl font-bold">
        45-55 minutes
       </Text>
      </View>

      <Image
       source={{
        uri: "https://links.papareact.com/fls",
       }}
       className="h-20 w-20"
      />
     </View>

     <Progress.Bar
      size={29}
      indeterminate={true}
      color="#00ccbb"
     />

     <Text className="mt-2 text-gray-500">
      Your order at {restaurants.title} is being prepared
     </Text>
    </View>
   </SafeAreaView>

   {/* <MapView
    initialRegion={{
     latitude: restaurants.lat,
     longitude: restaurants.long,
     latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    }}
    className="flex-1 -mt-10 z-0"
    mapType="mutedStandard"
   >
    <Marker 
         coordinate={ {
          latitude: 7.37756,
          longitude: 3.90591,
      }}
      title={restaurants.title}
      description={restaurants.short_description}
      identifier="origin"
      pinColor="#00ccbb"
    />
   </MapView> */}
   <MapView
    initialRegion={{
     latitude: 7.37756,
     longitude: 3.90591,
     latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    }}
    mapType="mutedStandard"
    className="flex-1 -mt-10 z-0"
   >
    <Marker
     coordinate={{
      latitude: 7.37756,
      longitude: 3.90591,
     }}
     title={restaurants.title}
     description={restaurants.short_description}
     identifier="origin"
     pinColor="#00ccbb"
    />
   </MapView>

   <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
    <Image
     source={{
      uri: "https://links.papareact.com/wru",
     }}
     className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
    />

    <View className="flex-1">
     <Text className="text-lg">Peter Michael</Text>
     <Text className="text-gray-400 ">Your Rider</Text>
    </View>

    <Text className="text-[#00ccbb] text-lg mr-5 font-bold">
     Call
    </Text>
   </SafeAreaView>
  </View>
 );
};

export default DeliveryScreen;

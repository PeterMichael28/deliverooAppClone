import React, { useState } from "react";
import {
 Image,
 Text,
 TouchableOpacity,
 View,
} from "react-native";

import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../clients";
import { useNavigation } from "@react-navigation/native";

const RestaurantsCard = (props) => {
 const {
  id,
  imageUrl,
  title,
  rating,
  genre,
  short_description,
  dishes,
  long,
  lat,
  address,
 } = props;

 //  console.log(genre);
 const navigation = useNavigation();
 return (
  <TouchableOpacity
   className="bg-white mr-3 shadow-sm hover:drop-shadow-lg"
   onPress={() =>
    navigation.navigate("Restaurants", {
     id,
     imageUrl,
     title,
     rating,
     genre,
     short_description,
     dishes,
     long,
     lat,
     address,
    })
   }
  >
   <Image
    source={{
     uri: urlFor(imageUrl).url(),
    }}
    className="w-64 h-36 rounded-sm"
   />

   <View className="px-3 pb-4">
    <Text className="font-bold text-lg pt-2">{title}</Text>

    <View className="flex-row item-center space-x-3 ">
     <View className="flex-row item-center space-x-1 justify-center">
      <StarIcon
       color="green"
       opacity={0.5}
       size={12}
       style={{ marginTop: 3 }}
       className="opacity-60 self-center"
      />
      <Text className="text-sm text-gray-500">
       <Text className="text-green-500">- {rating}</Text>
      </Text>
     </View>

     <View className="items-center justify-center flex-row space-x-2">
      {genre.map(
       (gen, i) =>
        i < 3 && (
         <Text
          key={gen.name}
          className="items-center justify-center flex-row text-gray-400 text-xs"
         >
          {gen.name}
         </Text>
        )
      )}
     </View>
    </View>

    <View className="flex-row items-center space-x-1">
     <MapPinIcon
      color="gray"
      size={15}
      className="opacity-50"
     />
     <Text className="text-xs text-gray-600">
      Nearby - {`${address.slice(0, 25)}...`}
     </Text>
    </View>
   </View>
  </TouchableOpacity>
 );
};

export default RestaurantsCard;

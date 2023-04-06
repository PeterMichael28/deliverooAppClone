import React from "react";
import {
 Text,
 View,
 TouchableOpacity,
 Image,
} from "react-native";

const CategoryCard = ({ imageUrl, title }) => {
 return (
  <TouchableOpacity className="mr-1 relative rounded-md">
   <Image
    source={{
     uri: imageUrl,
    }}
    className="h-20 w-28 rounded"
   />
   <Text className="absolute z-20 bottom-1 left-1 text-white font-bold">
    {title}
   </Text>

   <View className="absolute w-full h-full bg-black/40 top-0 bottom-0 left-0 right-0 z-10 rounded-md"></View>
  </TouchableOpacity>
 );
};

export default CategoryCard;

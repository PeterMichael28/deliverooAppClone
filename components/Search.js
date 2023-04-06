import React from "react";
import { TextInput, View } from "react-native";
import {
 MagnifyingGlassIcon,
 AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const Search = () => {
 return (
  <View className="flex-row items-center space-x-2 pb-2 mx-2">
   <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 py-2 items-center rounded">
    <MagnifyingGlassIcon color="gray" size={20} />
    <TextInput
     placeholder="Restaurants and Cuisines"
     keyboardType="default"
     className="border-none outline-none"
    />
   </View>

   <AdjustmentsHorizontalIcon color="#00ccbb" />
  </View>
 );
};

export default Search;

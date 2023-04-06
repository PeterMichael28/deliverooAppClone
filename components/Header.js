import React from "react";
import { Image, View, Text } from "react-native";

import {
 ChevronDownIcon,
 UserIcon,
 MagnifyingGlassIcon,
 AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const Header = () => {
 return (
  <View className="flex-row space-x-2 items-center pb-3 mx-4">
   <Image
    source={{
     uri: "https://links.papareact.com/wru",
    }}
    className="w-7 h-7 bg-gray-300 p-4 rounded-full"
   />

   <View className="flex-1">
    <Text className="font-bold text-gray-400 text-sm">
     Deliver Now
    </Text>
    <Text className="font-bold text-xl -mt-1">
     Current Location
     <ChevronDownIcon color="#00ccbb" size={20} />
    </Text>
   </View>

   <View>
    <UserIcon size={25} color="#00ccbb" />
   </View>
  </View>
 );
};

export default Header;

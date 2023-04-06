import {
 useNavigation,
 useRoute,
} from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import {
 Image,
 ScrollView,
 StatusBar,
 Text,
 TouchableOpacity,
 View,
} from "react-native";
import { urlFor } from "../clients";
import {
 ArrowLeftIcon,
 ChevronRightIcon,
 StarIcon,
 MapPinIcon,
 QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/RestaurantSlice";
import { selectItems } from "../features/cartSlice";

const RestaurantsScreen = () => {
 const navigation = useNavigation();
 const dispatch = useDispatch();
 const items = useSelector(selectItems)

 const {
  params: {
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
  },
 } = useRoute();

 //removing the header
 useLayoutEffect(() => {
  navigation.setOptions({
   headerShown: false,
  });
 }, []);

 useEffect(() => {
    dispatch(setRestaurant({
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
    }))
 }, [dispatch])

 return (
  <>
   {/* cart modal */}
   {items.length > 0 && <Cart />}

   <ScrollView>
    {/* top header section */}
    <View className="relative">
     <Image
      source={{
       uri: urlFor(imageUrl).url(),
      }}
      className="w-full h-56 bg-gray-300 p-4"
     />
     <View className="absolute w-full h-full bg-black/20 top-0 bottom-0 right-0 left-0"></View>

     <TouchableOpacity
      className="absolute top-8 left-5 p-2 bg-gray-100 rounded-full"
      onPress={() => navigation.goBack()}
     >
      <ArrowLeftIcon size={20} color="#00ccbb" />
     </TouchableOpacity>
    </View>

    {/* content */}
    <View className="bg-white">
     <View className="px-4 pt-4">
      <Text className="text-3xl font-bold">{title}</Text>

      <View className="flex-row space-x-2 my-1">
       <View>
        {/* Ratings */}
        <View className="flex-row items-center">
         <StarIcon color="green" opacity={0.5} size={14} />
         <Text className="text-sm text-gray-500">
          <Text className="text-green-500"></Text> -{" "}
          {rating}
         </Text>
        </View>

        {/* Categories */}
        <View className="items-start justify-start flex-row flex-wrap space-x-2 mt-2 space-y-1">
         {genre.map((gen, i) => (
          <Text
           key={gen.name}
           className=" text-gray-400 text-xs"
          >
           {gen.name}
          </Text>
         ))}
        </View>
        {/* location */}
        <View className="flex-row items-center space-x-1 mt-2">
         <MapPinIcon
          color="gray"
          size={15}
          className="opacity-50"
         />
         <Text className="text-base text-gray-600">
          Nearby - {address}
         </Text>
        </View>
       </View>
      </View>

      <Text className="text-gray-500 mt-2 pb-4">
       {short_description}
      </Text>
     </View>

     <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y  border-gray-300">
      <QuestionMarkCircleIcon
       color="gray"
       opacity={0.6}
       size={19}
      />
      <Text className="pl-2 flex-1 text-lg font-bold">
       Have a food allergy?
      </Text>
      <ChevronRightIcon color="#00bbcc" />
     </TouchableOpacity>
    </View>

    {/* menu */}
    <View className="pb-24">
     <Text className="px-4 pt-6 mb-3 font-bold text-xl">
      Menu
     </Text>

     {/* Dishes */}
     {dishes.map((dish) => (
      <DishRow
       key={dish._id}
       id={dish._id}
       name={dish.name}
       description={dish.short_description}
       price={dish.price}
       image={dish.image}
      />
     ))}
    </View>

    <Text>{title}</Text>
   </ScrollView>
  </>
 );
};

export default RestaurantsScreen;

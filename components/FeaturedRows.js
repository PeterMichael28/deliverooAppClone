import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { client } from "../clients";
import { OneFeaturedQuery } from "../utils/data";
import RestaurantsCard from "./RestaurantsCard";

const FeaturedRows = ({ title, description, id }) => {
 const [singleFeatured, setSingleFeatured] = useState([]);
 const [loading, setLoading] = useState(true);

 //  console.log(id);
 useEffect(() => {
  client.fetch(OneFeaturedQuery(id)).then((data) => {
   setSingleFeatured(data[0]);
   setLoading(false);
  });
 }, [id]);

 //  console.log(singleFeatured);
 return (
  <View className="mt-2">
   <View className="mt-4 flex-row items-center justify-between px-4">
    <Text className="font-bold text-xl">{title}</Text>
    <ArrowRightIcon color="#00ccbb" />
   </View>

   <Text className="text-xs text-gray-500 px-4">
    {description}
   </Text>

   <ScrollView
    horizontal
    contentContainerStyle={{
     paddingHorizontal: 15,
    }}
    className="pt-4"
    showsHorizontalScrollIndicator={false}
   >
    {/* Restaurants cards */}
    {loading ? (
     <Text className="w-full h-full font-semibold italic items-center justify-center animate-pulse">
      Loading Restaurants....
     </Text>
    ) : (
     singleFeatured &&
     singleFeatured?.restaurants.map((restaurant) => (
      <RestaurantsCard
       id={restaurant._id}
       imageUrl={restaurant.image}
       title={restaurant.name}
       rating={restaurant.rating}
       genre={restaurant.type}
       short_description={restaurant.short_description}
       dishes={restaurant.dishes}
       long={restaurant.long}
       lat={restaurant.lag}
       address={restaurant.address}
       key={restaurant._id}
      />
     ))
    )}
   </ScrollView>
  </View>
 );
};

export default FeaturedRows;

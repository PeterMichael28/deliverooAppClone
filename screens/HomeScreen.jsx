import { useNavigation } from "@react-navigation/native";
import React, {
 useEffect,
 useLayoutEffect,
 useState,
} from "react";
import {
 Text,
 View,
 SafeAreaView,
 Image,
 StatusBar,
 TextInput,
 ScrollView,
} from "react-native";
import { client } from "../clients";

import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";
import Header from "../components/Header";
import Search from "../components/Search";
import { featuredQuery } from "../utils/data";

const HomeScreen = () => {
 const navigation = useNavigation();

 const [featuredCategory, setFeaturedCategory] = useState(
  []
 );

 const [loading, setLoading] = useState(true);

 //removing the header
 useLayoutEffect(() => {
  navigation.setOptions({
   headerShown: false,
  });
 }, []);

 //fetching featured categories
 useEffect(() => {
  client.fetch(featuredQuery).then((data) => {
   setFeaturedCategory(data);
   setLoading(false);
  });
 }, []);

 return (
  <SafeAreaView
   className="bg-white pt-5"
   style={{ marginTop: StatusBar.currentHeight + 10 }}
  >
   {/* Header Section */}
   <Header />

   {/* Search Section */}
   <Search />

   {/* SCrollable Container for the content */}

   <ScrollView
    className="bg-gray-100 pb-96"
    contentContainerStyle={{
     paddingBottom: 100,
    }}
   >
    {/* Categories */}
    <Categories />

    {/* featured Rows */}
    {loading ? (
     <Text className="w-full h-full font-semibold italic items-center justify-center animate-pulse">
      Loading Featured....
     </Text>
    ) : (
     featuredCategory &&
     featuredCategory.map((category) => (
      <FeaturedRows
       key={category._id}
       title={category.name}
       description={category.short_description}
       id={category._id}
      />
     ))
    )}
   </ScrollView>
  </SafeAreaView>
 );
};

export default HomeScreen;

import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { client, urlFor } from "../clients";
import { fetchCategory } from "../utils/data";
import CategoryCard from "./CategoryCard";

const Categories = () => {
 const [categories, setCategories] = useState([]);
 useEffect(() => {
  client.fetch(fetchCategory).then((data) => {
   setCategories(data);
  });
 }, []);
 return (
  <ScrollView
   horizontal
   contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,
   }}
   showsHorizontalScrollIndicator={false}
  >
   {/* CATEGORY CARD */}

   {categories &&
    categories.map((category) => (
     <CategoryCard
      key={category._id}
      imageUrl={urlFor(category.image).width(250).url()}
      title={category.name}
     />
    ))}
  </ScrollView>
 );
};

export default Categories;

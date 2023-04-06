import {
 View,
 Text,
 TouchableOpacity,
 Image,
} from "react-native";
import React, { useState } from "react";
import { urlFor } from "../clients";

import {
    PlusCircleIcon,
    MinusCircleIcon
   } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectACtiveItem, selectItems } from "../features/cartSlice";

const DishRow = ({
 id,
 description,
 name,
 image,
 price,
}) => {

    const items = useSelector(selectItems)
    const activeItem = useSelector((state) => selectACtiveItem(state, id))
    // console.log(activeItem)
    const dispatch = useDispatch()

    const [isPressed, setIsPressed] = useState()

    const addedToCart = () => {
        dispatch(addToCart({id, name, image, price}))
        // console.log(items)
    }

    const removingFromCart = () => {
        dispatch(removeFromCart({id}))
    }
 return (

    <>
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white p-4 border border-gray-200 ${isPressed && 'border-b-0'}`}>

            <View className='flex-row '>
        <View className='flex-1 pr-2'>
            <Text className="text-lg mb-1 font-bold">{name}</Text>
            <Text className="text-gray-700">{description}</Text>
            <Text className="text-gray-800 mt-2 text-base font-semibold">#{price}</Text>
        </View>
        <View className='rounded'>
            <Image
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4 rounded"
            style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
            />
        </View>
                
            </View>
        </TouchableOpacity>

        {/* add to cart icons */}
         {
             isPressed && (
             <View className='bg-white px-4'>
                <View className='flex-row items-center space-x-2 pb-3'>
                    <TouchableOpacity onPress={removingFromCart} disabled={activeItem.length < 1 ? true : false}>
                        <MinusCircleIcon color={`${activeItem.length < 1 ? 'gray' : '#00bbcc'}`} size={40}/>
                    </TouchableOpacity>
                    <Text>{activeItem[0]?.qty || 0}</Text>
                    <TouchableOpacity onPress={addedToCart}>
                        <PlusCircleIcon color='#00bbcc' size={40}/>
                    </TouchableOpacity>
                </View>
             </View>
             )
         }


    </>
    
 );
};

export default DishRow;

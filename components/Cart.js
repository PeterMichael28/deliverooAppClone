import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectItems, selectTotalAmount } from '../features/cartSlice';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotalAmount)
    const navigation = useNavigation()

  if ( !items || items.length === 0 ) {
    return null
  }


  return (
    <View className='absolute bottom-8 w-full z-50' >
          <TouchableOpacity className='bg-[#00bbcc] mx-5 p-5 flex-row rounded-lg space-x-3 items-center opacity-90' onPress={() => navigation.navigate('Cart')}>
            <Text className='text-white font-extrabold text-lg bg-[#48ddeb] px-2 py-1 rounded'>{items?.length}</Text>
            <Text className='flex-1 text-white font-extrabold text-xl text-center'>View Basket</Text>
            <Text className='text-white font-bold text-base'># {total || 0}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Cart
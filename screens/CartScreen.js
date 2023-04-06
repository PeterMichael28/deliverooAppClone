import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurants } from '../features/RestaurantSlice';
import { removeFromCart, selectItems, selectTotalAmount } from '../features/cartSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../clients';

const CartScreen = () => {

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurants)
  const items = useSelector(selectItems)
  const dispatch = useDispatch()
  const total = useSelector(selectTotalAmount)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100 '>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-sm'>
          <View>
            <Text className='text-lg text-center font-bold'>Cart</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()} className='rounded-full bg-gray-100 absolute top-3 right-5'>
            <XCircleIcon color='#00bbcc' size={50} />
          </TouchableOpacity>
        </View>


        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image source={ {uri: "https://links.papareact.com/wru"} } className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
          <Text className='flex-1'>Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#00ccbb]'>Change</Text>
          </TouchableOpacity>
         
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          { items && items.map( (item) => (
            <View key={ item.id } className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='text-[#00ccbb] text-base font-bold'>{item.qty } x</Text>
              <Image
                source={ { uri: urlFor( item.image ).url() } }
                className='w-10 h-10 rounded-full'
              />
              <Text className='flex-1 font-bold text-gray-700'>{item.name }</Text>
              <Text className='font-semibold  '>#{ item.price }</Text>
              
              <TouchableOpacity onPress={() => dispatch(removeFromCart({id: item.id, mode: 'all'}))}>
                <Text className='text-xs text-[#00ccbb]'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* total */}
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text># {total}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery</Text>
            <Text># 653</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-700 text-base'>Order Total</Text>
            <Text className='font-extrabold text-lg'># {total+ 653}</Text>
          </View>

          <TouchableOpacity className='rounded-lg p-4 bg-[#00ccbb]' onPress={() => navigation.navigate('PreparingOrder')}>
            <Text className='text-center text-lg font-bold text-white'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen
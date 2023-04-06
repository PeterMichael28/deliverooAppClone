import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {
    const navigation = useNavigation()

    useEffect( () => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 5000);
    }, [])
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
      <Animatable.Image 
        source={require('../assets/load3.webp')}
        animation='slideInUp'
        iterationCount={1}
        className='h-80 w-80'
      />

      <Animatable.Text
       animation='slideInUp'
       iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for Restaurants to accept your order...
      </Animatable.Text>

      <Progress.Circle size={40} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingScreen
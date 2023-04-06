import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    restaurants: [],

}

export const restaurantSlice = createSlice( {
    name: 'restaurant',
    initialState,
    reducers: {

        setRestaurant: ( state, action ) => {
            state.restaurants = action.payload
        }

    }

    })


    export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurants = (state) => state.restaurant.restaurants


export default restaurantSlice.reducer
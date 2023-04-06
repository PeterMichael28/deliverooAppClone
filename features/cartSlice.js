import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    items: [],
    totalAmount: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        //add to cart
      addToCart: ( state, action ) => {
          const existing = state.items.filter(item => item.id === action.payload.id)
          
          if ( existing.length > 0 ) {
            existing[0].qty++
            //   console.log(existing[0].qty)
          } else {
              const newItem = {
                  id: action.payload.id,
                  name: action.payload.name,
                  qty: 1,
                  price: action.payload.price,
                  image: action.payload.image,
              }
              state.items= [...state.items, newItem]
            //   console.log(action.payload.id)
          }
      },
      
      removeFromCart: ( state, action ) => {
        const existing = state.items.filter(item => item.id === action.payload.id)
        // console.log(action.payload.id)
        if(existing.length> 0) {

          if ( action.payload.mode ) {
            const leftItems = state.items.filter(item => item.id !== action.payload.id)
             state.items = leftItems
          }

            if ( existing[ 0 ].qty > 1 ) {
                existing[0].qty--
            } else {
                const leftItems = state.items.filter(item => item.id !== action.payload.id)
                state.items = leftItems
            }
        }
      }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItems = (state) => state.cart.items
export const selectACtiveItem = (state, id) => state.cart.items.filter(item => item.id === id)
export const selectTotalAmount = ( state ) => {
    return state.cart.items.map( ( item ) => item.price * item.qty ).reduce((total, item) => total+= item, 0)
}

export default cartSlice.reducer
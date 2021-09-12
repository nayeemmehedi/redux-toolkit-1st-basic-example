import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemon } from '../features/Pokemon'

export const store = configureStore({
  reducer: {
 
    [pokemon.reducerPath]: pokemon.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemon.middleware),
})


setupListeners(store.dispatch)

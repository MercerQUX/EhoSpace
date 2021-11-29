import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dialogReducer from "./reducers/dialogsSlice";


const rootReducer = combineReducers({
    dialogReducer
})

const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"] 
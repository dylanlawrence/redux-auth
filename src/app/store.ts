import {configureStore, ThunkAction, Action, ConfigureStoreOptions, combineReducers} from '@reduxjs/toolkit';

import {api} from "./services/auth";
import authReducer from '../features/auth/authSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer,
});
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        devTools: process.env.NODE_ENV !== 'production',
    });

/*middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
...options*/



export const store = createStore()
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

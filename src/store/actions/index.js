// src/store/actions/index.js
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage
import userReducer from '../reducers/userReducer'; // Import reducer

// Kết hợp các reducer
const rootReducer = combineReducers({
    user: userReducer,
});

// Cấu hình redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
export const store = createStore(persistedReducer);

// Tạo persistor
export const persistor = persistStore(store);
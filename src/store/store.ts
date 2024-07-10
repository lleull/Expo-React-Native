import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootsagas';
import rootReducer from './reducers/rootreducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist configuration
const persistConfig = {
  key: 'root', // key for the localStorage key
  storage: AsyncStorage // define which storage to use
  // Optionally, you can blacklist or whitelist here
  // blacklist: ['reducerName'] // reducer names that you do NOT want to persist
  // whitelist: ['reducerName'] // reducer names that you DO want to persist
};

// Combine your reducers and apply persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

// Run your sagas
sagaMiddleware.run(rootSaga);

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };

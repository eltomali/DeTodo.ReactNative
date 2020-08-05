//import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

//AsyncStorage.clear();
// import { persistStore, persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// export let persistor = persistStore(store);

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {init} from './helpers/db';
import { TodoNavigator } from './navigation';

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch(err => {
    console.log("Initializing db failed.");
    console.log(err);
  });


export default function App() {
   
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <View style={styles.container}>
          <TodoNavigator />
        </View>
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

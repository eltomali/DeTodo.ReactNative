import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'



import TodoList from './components/TodoList';
import { TodoNavigator } from './navigation';


export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <TodoNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 40
  },
});

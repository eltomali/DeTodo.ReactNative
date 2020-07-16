import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux'; 
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
});

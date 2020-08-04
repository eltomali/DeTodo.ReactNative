import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen, {screenOptions as topBar} from '../components/screens/MainScreen';
import TodoDetailsScreen from '../components/screens/TodoDetailsScreen';
import AddTodoScreen from '../components/screens/AddTodoScreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const AppStack = createStackNavigator();

export const TodoNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator initialRouteName="Main" >
        <AppStack.Screen
          name="Main"
          component={MainScreen}
          options= {topBar}
        />
        <AppStack.Screen
          name="TodoDetail"
          component={TodoDetailsScreen}

        />
        <AppStack.Screen
          name="AddTodo"
          component={AddTodoScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

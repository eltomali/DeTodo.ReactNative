import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen, {
  screenOptions as topBar,
} from "../components/screens/MainScreen";

import AddTodoScreen, {
  screenOptions as addTodoScreenOptions,
} from "../components/screens/AddTodoScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const AppStack = createStackNavigator();

export const TodoNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator initialRouteName="Main">
        <AppStack.Screen name="Main" component={MainScreen} options={topBar} />
        <AppStack.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={addTodoScreenOptions}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import TodoList from "../TodoList";

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>My Todos</Text>
      </View>
      <View style={styles.todos}>
        <TodoList navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30, 
  },
  title: {
    marginVertical: 10,
    alignItems: "center",
  },
  todos: {
    flex: 1,
  },
});

export default MainScreen;

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
    headerRight: () => (
      <Button
        onPress={() => navData.navigation.navigate("AddTodo")}
        title="Add Todo"
      />
    ),
  };
};

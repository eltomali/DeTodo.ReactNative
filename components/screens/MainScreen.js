import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadTodosAction, deleteTodoAction } from "../../redux/actions";

const MainScreen = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosAction());
  }, [dispatch]);

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>My Todos</Text>
      </View>
      <View style={styles.todos}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => (
            <TouchableOpacity
              onPress={() => deleteTodoHandler(itemData.item.id)}
            >
              <Text>{itemData.item.todo}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  title: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
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

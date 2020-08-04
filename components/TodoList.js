import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  console.log({todos})
  return (
    <FlatList
      style={{ width: "80%" }}
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(itemData) => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("TodoDetail", {
              todoId: itemData.item.id,
              todoText: itemData.item.todo,
            })
          }
        >
          <Text>{itemData.item.todo}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
export default TodoList;


import React, {useEffect} from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {loadTodosAction} from "../redux/actions";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(loadTodosAction() );
  }, [dispatch]);

  return (
    <FlatList
      style={{ width: "80%" }}
      data={todos}
      keyExtractor={item => item.id.toString()}
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


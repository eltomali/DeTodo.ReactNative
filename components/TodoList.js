import React from "react";
import { FlatList } from "react-native";

import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => dispatch(deleteTodo(id));

  
  const renderItem = ({item}) => (
    <Todo text={item.todo} deleteHandler={() => deleteTodoHandler(item.id)} />
  );

  return (
    <FlatList
      style = {{width: "80%"}}
      data={todos}
      keyExtractor={(item, index) => index.toString() }
      renderItem={renderItem}
    />
  );
};
export default TodoList;

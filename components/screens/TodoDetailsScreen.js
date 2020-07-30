import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";

const TodoDetailsScreen = ({route, navigation}) => {
  
  const {
    todoId, 
    todoText
  } = route.params;
  
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => { 
    dispatch(deleteTodo(id));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={todoText}
      />
      <Button title="Update" />
      <Button title="Delete" onPress={() => deleteTodoHandler(todoId)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
});

export default TodoDetailsScreen;

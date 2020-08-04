import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actions";

const TodoDetailsScreen = ({route, navigation}) => {
  
  const {
    todoId, 
    todoText
  } = route.params;

  const [todo, setTodo] = useState(todoText)
  
  const dispatch = useDispatch();
  
  const inputChangeHandler = text => {
    setTodo(text);
  };

  const deleteTodoHandler = (id) => { 
    dispatch(deleteTodo(id));
    navigation.goBack();
  }

  const updateTodoHandler = (text, id) => { 
    console.log(text);
    dispatch(updateTodo(text, id));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={todo}
        onChangeText={inputChangeHandler}
      />
      <Button title="Update" onPress={() => updateTodoHandler(todo, todoId)}/>
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

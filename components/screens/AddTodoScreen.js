import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

const AddTodo = ({navigation}) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const buttonHandler = () => {
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Write your todo here"
      />
      <View style={styles.addButton}>
        <Button title="Add Todo" onPress={buttonHandler} />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginTop: 30, 
    marginHorizontal: 30
  },
  addButton: {
    marginTop: 20
  }
});

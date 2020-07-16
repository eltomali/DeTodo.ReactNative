import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const buttonHandler = () => {
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        backgroundColor="white"
        width="80%"
      />
      <Button title="Add Todo" onPress={buttonHandler} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
});

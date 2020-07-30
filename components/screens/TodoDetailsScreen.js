import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Todo Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TodoDetailsScreen;

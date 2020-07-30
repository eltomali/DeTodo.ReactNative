import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Todo = ({ text }) => (
  <View style={{ marginVertical: 15, width: "100%" }}>
    <TouchableOpacity >
      <Text>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default Todo;

// const Todo = ({ deleteHandler, text }) => (
//   <View style={{marginVertical: 15, width:"100%"}}>
//     <TouchableOpacity onPress={(id) => deleteHandler(id)} >
//       <Text>{text}</Text>
//     </TouchableOpacity>
//   </View>
// );

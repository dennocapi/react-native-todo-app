import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CheckContainer = ({ completed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        name={completed ? "checksquare" : "checksquareo"}
        size={24}
        color={completed ? "green" : "black"}
      />
    </TouchableOpacity>
  );
};

export default CheckContainer;

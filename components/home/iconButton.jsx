import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const IconButton = ({ name, color, size, onPress }) => {
  return (
    <TouchableOpacity>
      <Ionicons name={name} size={size} color={color} onPress={onPress} style={{ marginRight: 12 }}  />
    </TouchableOpacity>
  );
};

export default IconButton;

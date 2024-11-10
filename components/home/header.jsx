import { View, Text } from "react-native";
import React from "react";
import IconButton from "./iconButton";

const Header = () => {
  return (
    <View className="flex-row  justify-between items-center">
      <View className="flex-row justify-between items-center ">
        <IconButton
          name="menu"
          color="#7a0df2"
          size={30}
          onPress={() => {
            console.log("first");
          }}
        />
        <Text className=" text-2xl font-extrabold ">Home</Text>
      </View>

      <View className="flex-row justify-between">
        <IconButton
          name="search"
          color="#7a0df2"
          size={30}
          onPress={() => {
            console.log("first");
          }}
        />
        <IconButton
          name="person"
          color="#7a0df2"
          size={30}
          onPress={() => {
            console.log("first");
          }}
        />
      </View>
    </View>
  );
};

export default Header;

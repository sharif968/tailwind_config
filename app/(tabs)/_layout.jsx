import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabBarIcon = ({ style, focused, color, ...rest }) => {
  return (
    <View className="flex items-center justify-space-between">
      <View
        className={` ${
          focused
            ? "absolute  h-[5px] w-[90px] rounded-full bottom-14 bg-black"
            : ""
        }`}
      />

      <Ionicons size={40} color={color} {...rest} />
    </View>
  );
};

const screenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: "#fff",
  tabBarInactiveTintColor: "gray",
  tabBarStyle: {
    backgroundColor: "#7a0df2",
    height: 70,
    position: "absolute",
    elevation: 10,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  tabBarShowLabel: false,
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={screenOptions}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "grid" : "grid-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

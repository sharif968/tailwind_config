import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/home/header";

import InputBox from "../../components/home/inputBox";

const Home = () => {
  return (
    <SafeAreaView className="flex-1  mx-5  ">
      <Header />
      <InputBox />
    </SafeAreaView>
  );
};

export default Home;

import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/home/header'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView className="flex-1 mx-5  ">
      <Text className="text-2xl font-extrabold text-blue-800">About</Text>
    </SafeAreaView>
  )
}

export default About


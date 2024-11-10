import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputBox = () => {
  return (
  <TextInput
  placeholder="Search"
  placeholderTextColor="#6b7280"
 style={{
  borderWidth: 2,
  borderStyle: "solid",
  width: "100%",
  color: "#6b7280",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "#6b7280",
  padding: 8,
  borderRadius: 8,
  marginTop: 20
 }}

  />
  )
}

export default InputBox
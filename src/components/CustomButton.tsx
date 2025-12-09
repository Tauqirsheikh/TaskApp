/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  bgColor?: string;
  textColor?: string;
}

export default function CustomButton({
  title,
  onPress,
  bgColor = "#fff",
  textColor = "#000",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bgColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
});

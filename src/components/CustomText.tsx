import { Text, TextProps } from "react-native";
import React from "react";

const CustomText = (props: TextProps) => {
  return (
    <Text {...props} style={[{ fontFamily: "Poppins-Regular" }, props.style]} />
  );
};

export default CustomText;

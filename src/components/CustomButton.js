import * as React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ buttonStyle, type, text, onPress }) => (
  <Button mode={type} onPress={onPress} style={buttonStyle}>
    {text}
  </Button>
);

export default CustomButton;

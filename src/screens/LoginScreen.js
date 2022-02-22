import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
  const userAdmin = {
    email: "roku@roku.com",
    password: "roku",
  };
  const [error, SetError] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const NavigateToHome = () => {
    navigation.navigate("Home");
  };

  const handleSubmit = () => {
    if (email === userAdmin.email && password === userAdmin.password) {
      NavigateToHome();
      SetError(false);
    } else {
      SetError(true);
    }
  };
  return (
    <View style={styles.loginView}>
      <View>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <InputField
          title="Email"
          type="outlined"
          value={email}
          setValue={SetEmail}
          error={error}
        />
      </View>
      <View style={styles.inputView}>
        <InputField
          title="Password"
          type="outlined"
          password={true}
          value={password}
          setValue={SetPassword}
          error={error}
        />
      </View>
      <CustomButton
        buttonStyle={styles.buttonStyle}
        type="contained"
        text="Sign In"
        onPress={handleSubmit}
      />
      <View>
        <CustomButton type="text" text="forgot password?" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: {
    // backgroundColor: 'gray',
    // flex: 1,
    alignItems: "center",
    marginVertical: "30%",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  inputView: {
    marginBottom: 20,
    width: "85%",
  },
  buttonStyle: {
    width: "85%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
});

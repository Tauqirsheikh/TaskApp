import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const { height } = Dimensions.get("window");

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function handleLogin() {
    if (!email || !pass) {
      Alert.alert("Validation Error", "Email and Password are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (email === "touqeer@gmail.com" && pass === "Abcd@1234") {
      navigation.replace("Home");
    } else {
      Alert.alert("Invalid Login", "Email or Password is incorrect");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        secureTextEntry
        value={pass}
        setValue={setPass}
      />

      <CustomButton
        title="SIGN IN"
        bgColor="#fff"
        textColor="#00A86B"
        onPress={handleLogin}
      />

      <View style={styles.bottomRow}>
        <TouchableOpacity>
          <Text style={styles.smallText}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A86B",
    alignItems: "center",
    paddingTop: height * 0.1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "bold",
  },
  or: {
    color: "#fff",
    marginVertical: 15,
  },
  bottomRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  smallText: {
    color: "#fff",
  },
  signupBtn: {
    color: "#fff",
    fontWeight: "bold",
  },
});

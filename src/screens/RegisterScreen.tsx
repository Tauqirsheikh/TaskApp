import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { height } = Dimensions.get("window");

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Register">;
};

export default function RegisterScreen({ navigation }: RegisterScreenProps) {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Register</Text>

      <CustomInput placeholder="Full Name" value={name} setValue={setName} />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        secureTextEntry
        value={pass}
        setValue={setPass}
      />

      <CustomButton
        title="SIGN UP"
        bgColor="#fff"
        textColor="#FF6600"
        onPress={() => { }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6600",
    alignItems: "center",
    paddingTop: height * 0.10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "bold",
  },
  loginText: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
  },
});

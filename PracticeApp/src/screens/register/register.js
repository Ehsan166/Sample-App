import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Image,
} from "react-native";
import { registerStyles } from "./registerStyles";
import logo from "../../../assets/icon.png";

function Register({ navigation }) {
  const regFunc = () => {
    Alert.alert("You are Registered!");
  };
  const accFunc = () => {
    Alert.alert("Already have an Account!");
  };
  return (
    <View style={registerStyles.container}>
      <StatusBar>auto</StatusBar>
      <View style={registerStyles.logoCon}>
        <Image source={logo} style={registerStyles.logo} />
      </View>
      <View style={registerStyles.formCon}>
        <TextInput style={registerStyles.input} placeholder={"User Name"} />
        <TextInput style={registerStyles.input} placeholder={"Email"} />
        <TextInput
          style={registerStyles.input}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <TextInput
          style={registerStyles.input}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
        />
        <TouchableOpacity style={registerStyles.button} onPress={regFunc}>
          <Text style={registerStyles.text}> Register</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={accFunc}>
          <Text style={registerStyles.text1}>Already Have an Account?</Text>
        </TouchableOpacity> */}
        <View style={registerStyles.infoCon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={registerStyles.text1}>Already Have an Account!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={registerStyles.text1}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export { Register };

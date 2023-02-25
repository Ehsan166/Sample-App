import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { styles } from "./loginStyles";
import logo from "../../../assets/icon.png";

function Login({ navigation }) {
  const logFunc = () => {
    Alert.alert("Wellcom! You are Logged In");
  };
  // const forFunc = () => {
  //   Alert.alert("Forget Button");
  // };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar>auto</StatusBar>
      <View style={styles.logoCon}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.formCon}>
        <TextInput style={styles.input} placeholder={"Email"} />
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={logFunc}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={forFunc}>
          <Text style={styles.regText}>Regiter!</Text>
        </TouchableOpacity> */}
        <View style={styles.infoCon}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.text1}>Please Make an account!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.text1}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export { Login };

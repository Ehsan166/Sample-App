import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { homeStyles } from "./homeStyles";

function Home({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.container}>
      <StatusBar style="auto" />
      <View style={homeStyles.tollbar}>
        <Ionicons name="menu" size={35} color="white">
          <Text>Home</Text>
        </Ionicons>
      </View>
      <View style={homeStyles.infoCon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={homeStyles.text1}>Login Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={homeStyles.text1}>Register Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export { Home };

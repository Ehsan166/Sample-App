import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login/login";
import { Register } from "../screens/register/register";
import { Home } from "../screens/home/home";

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Register"}
          component={Register}
          options={{
            title: "Register",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Nav };

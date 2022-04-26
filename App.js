import * as React from "react";
import { StatusBar } from "expo-status-bar";
import Login from "./login";
import Main from "./main";
import Details from "./details";
import Carrinho from "./carrinho";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Audiowide_400Regular } from "@expo-google-fonts/audiowide";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  let [fontsLoaded, error] = useFonts({
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
export default App;

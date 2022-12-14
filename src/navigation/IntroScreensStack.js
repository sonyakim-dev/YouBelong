import * as React from "react";
import { Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Welcome from "../screens/Welcome";
import IntroFirst from "../screens/IntroFirst";
import IntroSecond from "../screens/IntroSecond";
import IntroThird from "../screens/IntroThird";

//Stacks
import UserStack from "./UserStack";

const Stack = createStackNavigator();

export default function IntroScreensStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="First"
        component={IntroFirst}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: () => (
        //     <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        //       ONE ONE ONE
        //     </Text>
        //   ),
        // }}
      />
      <Stack.Screen
        name="Second"
        component={IntroSecond}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Third"
        component={IntroThird}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserStack"
        component={UserStack}
        options={{ headerShown: false }}
        // options={{
        //   headerLeft: () => (
        //     <Ionicons
        //       name={"chevron-back-outline"}
        //       size={25}
        //       color={"black"}
        //       onPress={() => {
        //         navigation.popToTop();
        //       }}
        //       style={{ paddingLeft: 10 }}
        //     />
        //   ),
        //   headerShadowVisible: false,
        // }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenOneText: {
    fontSize: 32,
  },
});

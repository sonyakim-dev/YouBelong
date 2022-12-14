import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

//Screens
import UserStack from "../navigation/UserStack";
import CameraScreen from "./CameraScreen";

import CameraStack from "../navigation/CameraStack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function First({ navigation }) {
  return (
    <View>
      <Text>First</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Second")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
function Second({ navigation }) {
  return (
    <View>
      <Text>Second</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Third")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
function Third({ navigation }) {
  return (
    <View>
      <Text>Third</Text>
      <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeReadScreen({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First}></Stack.Screen>
        <Stack.Screen name="Second" component={Second}></Stack.Screen>
        <Stack.Screen name="Third" component={Third}></Stack.Screen>
        <Stack.Screen name="UserStack" component={UserStack} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

    // <
    // <View style={styles.screenOne}>
    //   <Text style={styles.screenOneText}>Home Read Screen</Text>
    //   <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('UserStack')}/>
    //   {/* <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('CameraScreen')}/> */}

    //   {/* <Button title="Go Back Home" onPress={() => navigation.goBack()} /> */}
    // </View>
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

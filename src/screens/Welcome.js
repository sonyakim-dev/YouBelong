import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/snapchat/merged.gif")} /> */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("First")}
      >
        <ImageBackground
          source={require("../../assets/snapchat/starting.png")}
          style={styles.image}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  welcome: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
  },
  row: {
    marginTop: 330,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Avenir Next",
    marginLeft: 12,
  },
  description: {
    padding: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

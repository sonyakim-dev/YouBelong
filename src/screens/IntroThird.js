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

export default function IntroThird({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/snapchat/third.png")}
        style={styles.image}
      >
        <View style={styles.row}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/snapchat/vector3.png")}
          />
          <Text style={styles.header}>Resources</Text>
        </View>

        <Text style={styles.description}>
          Educate yourself on accessing resources for foster youth and allies
          that want to help with basic needs, including housing, mental health,
          clothing, technology, and more.
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("UserStack")}
        >
          <Text style={styles.nextButtonText}>Start!</Text>
        </TouchableOpacity>
      </ImageBackground>
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
  row: {
    marginTop: 300,
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
    marginLeft: 10,
  },
  description: {
    padding: 20,
    marginTop: 5,
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
  nextButton: {
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#EC6060",
    width: 230,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
});

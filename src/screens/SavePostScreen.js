import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";
import uuid from "uuid-random";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TEST_ID } from "react-native-gifted-chat";

export default function SavePostScreen({ route }) {
  const [firstButton, setFirstButton] = useState(true);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);
  const [fourthButton, setFourthButton] = useState(false);

  const storageRef = ref(getStorage(), `posts/${uuid()}.jpg`);

  const { user } = useAuthentication();
  const media = route.params.source;
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const saveMediaToStorage = async () => {
    const img = await fetch(media);
    const bytes = await img.blob();

    console.log("start uploading image...");
    await uploadBytesResumable(storageRef, bytes);
    console.log("start getting image metadata...");
    const metadata = await getMetadata(storageRef);
    console.log("start getting downloadURL...");
    const downloadURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "Stories"), {
      userID: user.uid,
      downloadURL: downloadURL,
      creationDate: serverTimestamp(),
      contentType: metadata.contentType,
      fileName: metadata.name,
    });
  };

  const names = [
    {
      index: "1",
      name: "The Spot",
    },
    {
      index: "2",
      name: "Spotlight ",
    },
    {
      index: "3",
      name: " Other Platforms ",
    },
  ];

  return (
    <View style={styles.container}>
      {isFocused ? (
        <ScrollView style={styles.scrollView}>
          <Image style={styles.mediaPreview} source={{ uri: media }} />
          {/* <View style={styles.formContainer}>
            <TextInput
              style={styles.inputText}
              maxLength={150}
              placeholder='share here'
              multiline
            />
          </View> */}

          <View style={styles.categoryContainer}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/7e84/644c/c7c94eecf41e1eceecbf42ece84f3490?Expires=1660521600&Signature=ePbnB665O1LRZ58hqcdnAQtuVVe3E3Qcul0MMNm83XvA8DRz0dz~P1YiFcOqTLjW454-hS5PmgdpM4-UGSkdPTONDPK7GJvO8G1~sxIKdjcxL-17U6G4Upu5zadzAy1wcwn8aM-IwwdC4roU17fA~1WTtJk-a6qQDIPYdz9ngvG6XirKoEekatQV4Qg6P84OWeYb18n~0mWxjNftGheD7PFxGfds3O1KMbnt7c7u4Q-NlkLJ9Z097x31GbXhakgRyBhkWTZW8yaopc3oHDMDdMI5IcnWK87YREoKmo~a0yF067g~7MGNscH7v6CiEUQ1E~dZonpNjZ9eRex89qX49Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              }}
              style={styles.bitmoji}
            />
            {/* <Text style={styles.categoryHeader}>Share your story to: </Text> */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setFirstButton(!firstButton)}
            >
              <RadioButton
                value="firstButton"
                status={firstButton === true ? "checked" : "unchecked"}
                color="#FFDD5E"
                onPress={() => setFirstButton(!firstButton)}
              />
              <Text style={styles.buttonText}>Share to</Text>
              <Text style={styles.locationText}> The Spot</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setSecondButton(!secondButton)}
            >
              <RadioButton
                value="secondButton"
                status={secondButton === true ? "checked" : "unchecked"}
                onPress={() => setSecondButton(!secondButton)}
                color="#FFDD5E"
              />
              <Text style={styles.buttonText}>Share to</Text>
              <Text style={styles.locationText}> Spotlight</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setThirdButton(!thirdButton)}
            >
              <RadioButton
                value="thirdButton"
                status={thirdButton === true ? "checked" : "unchecked"}
                onPress={() => setThirdButton(!thirdButton)}
                color="#FFDD5E"
              />
              <Text style={styles.buttonText}>Share to</Text>
              <Text style={styles.locationText}> My Story</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setFourthButton(!fourthButton)}
            >
              <RadioButton
                value="fourthButton"
                status={fourthButton === true ? "checked" : "unchecked"}
                onPress={() => setFourthButton(!fourthButton)}
                color="#FFDD5E"
              />
              <Text style={styles.buttonText}>Save to </Text>
              <Text style={styles.locationText}>Gallery</Text>
            </TouchableOpacity>
          </View>
          {/*
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Camera')}
              style={styles.cancelButton}
            >
              <Ionicons name="alert-outline"/>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {saveMediaToStorage(); navigation.popToTop(); navigation.navigate('Stories')}}
              style={styles.postButton}
            >
              <Ionicons name="albums-outline"/>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
  */}
        </ScrollView>
      ) : (
        <></>
      )}

      <TouchableOpacity
        onPress={() => {
          saveMediaToStorage();
          navigation.navigate("Camera");
          navigation.navigate("Stories");
        }}
        style={styles.postButton}
      >
        <MaterialIcons
          name="file-upload"
          color={"white"}
          size={30}
          style={{ marginTop: 8 }}
        />
      </TouchableOpacity>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  mediaPreview: {
    aspectRatio: 9 / 16,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "black",
  },
  // inputText: {
  //   flex: 1,
  //   padding: 30,
  //   marginRight: 20,
  // },
  // formContainer: {
  //   margin: 20,
  //   flexDirection: 'row',
  // },
  categoryHeader: {
    fontSize: 16,
    fontFamily: "Avenir Next",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 210,
    marginBottom: 2,
  },
  postButton: {
    backgroundColor: "#5F86FF",
    borderRadius: 50,
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  categoryContainer: {
    marginVertical: 15,
    // backgroundColor: "#FBE869",
    borderRadius: 20,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 13,
    color: "black",
  },
  listStyle: {
    textAlign: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Avenir Next",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
  },
  bitmoji: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 180,
    width: 100,
  },
});

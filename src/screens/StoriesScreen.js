import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
  Modal,
  Pressable,
  RefreshControl,
} from "react-native";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function StoriesScreen({ navigation, route }) {
  const videoRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  }, []);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Stories"));
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()]);
    });
  }

  useEffect(() => {
    // let unsubscribeFromNewSnapshots = onSnapshot(collection(db, "Stories"), (snapshot) => {
    getPosts();
    // });

    return function cleanupBeforeUnmounting() {
      setPosts([]);
    };
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Are you sure you want to leave?
            </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonCloseText}>Leave</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonCloseText2}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name="logout"
            size={30}
            style={styles.exitButton}
          />
        </Pressable>

        <Text style={styles.headerTitle}>The Spot</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {posts.length ? (
        <FlatList
          data={posts}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          renderItem={(post, index) => {
            return (
              <TouchableOpacity
                style={styles.feedContainer}
                onPress={() =>
                  navigation.push("Post", {
                    url: post.item.downloadURL,
                    type: post.item.contentType,
                  })
                }
              >
                {post.item.contentType === "video/mp4" ? (
                  <Video
                    ref={videoRef}
                    style={styles.videoContainer}
                    // resizeMode={Video.RESIZE_MODE_COVER}
                    isMuted={true}
                    autoplay={false}
                    source={{ uri: post.item.downloadURL }}
                  />
                ) : (
                  <Image
                    style={styles.imageContainer}
                    source={{ uri: post.item.downloadURL }}
                  />
                )}
                <View style={styles.playButtonContainer}>
                  <Ionicons
                    name={"play"}
                    color={"white"}
                    size={35}
                    style={styles.playButton}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
          // keyExtractor={(post) => post.fileName}
          numColumns={2}
          style={styles.list}
        />
      ) : (
        <></>
      )}

      {/* <TouchableOpacity
          onPress={() => {window.location.reload(false)}}
          style={styles.refreshButton}
      >
        <Ionicons name="arrow-redo" color={'white'} size={23} style={{marginTop:4}}/>
      </TouchableOpacity> */}

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 7,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
    fontFamily: "Avenir Next",
  },
  exitButton: {
    flex: 1,
    alignSelf: "left",
    marginLeft: 10,
    marginTop: 2.5,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  feedContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 280,
    margin: 5,
  },
  videoContainer: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  playButtonContainer: {
    backgroundColor: "black",
    borderRadius: 30,
    position: "absolute",
    padding: 5,
    opacity: 0.5,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  playButton: {
    alignSelf: "center",
    marginLeft: 5,
  },
  refreshButton: {
    backgroundColor: "#5F86FF",
    borderRadius: 20,
    width: 35,
    height: 35,
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
    fontFamily: "Avenir Next",
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#5F86FF",
    width: 150,
  },
  buttonCloseText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
  buttonCloseText2: {
    color: "#B7B7B7",
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
});

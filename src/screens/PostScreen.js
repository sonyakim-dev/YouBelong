import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Video, playAsync } from "expo-av";
import { useIsFocused } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PostScreen({ navigation, route }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [color, setColor] = useState("white");
  const { url, type } = route.params;
  const videoRef = useRef(null);
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused ? (
        type === "video/mp4" ? (
          <Video
            ref={videoRef}
            style={styles.videoContainer}
            isMuted={false}
            // autoplay={true}
            source={{ uri: url }}
            shouldPlay={true}
          />
        ) : (
          <Image style={styles.imageContainer} source={{ uri: url }} />
        )
      ) : null}

      <Ionicons
        name={"menu-outline"}
        size={30}
        color={"black"}
        onPress={() => setFilterVisible(true)}
        style={styles.menuIcon}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ flex: 1, width: "100%" }}>
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setFilterVisible(!filterVisible)}
            />
          </View>
          <View style={styles.modalViewTop}>
            <Text style={styles.modalText}>Send your love❤️</Text>
            <View style={styles.reactionContainer}>
              <TouchableOpacity
                onPress={() => setFilterVisible(!filterVisible)}
              >
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/90b1/42d9/d27efaeca936c876fc8ec93652c5068c?Expires=1660521600&Signature=cTrasSvkyoXoRSvvtqFh27KRONJk0SdCSnMeNAOsgQTrSL1NYSGZQato9JLX3YLEAgJf6a14bamWC2B-WWmhmwsXNMU1m0ofN67R4WfqFw2vRLx929lQlE0fH3xCJf81oaj4KNY7Y0cPh1-wIu~C0bWDTjVgIH-lfHtdi-2tb-nhbwHzltNDEfzQJRY0P9DHNBIdq1iXG9kXfp-muJcDr0fI2BviBNG0CElMFyeDlkirVSuCPPF~DU78OSocKlKeD0esK7w-7nnsiJTUT~~cWyC5uk2yk-TA5R~M1s~mdRSCFUD8kdjovAxk3OnaOr-NoVvV~ruWrvWlY3d21Ni6gQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  style={styles.reaction}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFilterVisible(!filterVisible)}
              >
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/afeb/a6a8/a61c240e7886b4af20a004a0ff39cbc5?Expires=1660521600&Signature=CbukKTXqhI0hzZK51mag70t-D0tiF2Z-4~EodAOfuoZG2bYWSAYCajZovZCDmOjtLBBfHnuYEP6tpOteJ~naSgOvsdNfIZNSpcDOnM7idbhMqH~V84ZoOOpKxpxS4a8FGor4ErvCji3lgc8I1Em9~1yKLIQ-qAACYmevsBu2635KdcmN1OrjTwNeCG3tCTyP9rmVRsxOzdX2zacvtqje7sBvy7GPD313GObjWuX0W90cIwb3nGJi6bIsqwRZ4UeCIfDo-zX2d7x1zmV6s1BgQ2TitNX0G-S81f8Bm5T7eWDjUZdn17asOtoXxKR2IFkKgO6yyh0H-ksom2KwY5EaBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  style={styles.reaction}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFilterVisible(!filterVisible)}
              >
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/a0c9/049e/94734b2f3db55a9ab0bcdaaf66c33f24?Expires=1660521600&Signature=etpWDiWSEx94y9zG-Gsz09SIwcpMxFmQV0GiutsgP56VY23-JGjOZdCVDUCy1sA5CYbCpkzKtBYDDsi~UHlrUudbf746xEk0wT4QWspSNeqzMPj1OfqsssXV7BKhbpkCm-dzJPQJipX7m9DoNPDGmbit0qEafaF~QYmtYawwyy1ajMVKw656WIBK90YIUiF6gOEkkemWjA72jv9TZgmiX5dmcaDjJMPJa7Y6rBoMOx8CNhfE4xxBBiUvPhClFsFcdy5pbhXx8~qOZ5gBbravre2Lr4dwYKRhrcaaSI3c4wsn~ajycdDCpHbtDKTTnnhU~jkjdARtOrSZftKe1xn1Lg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  style={styles.reaction}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFilterVisible(!filterVisible)}
              >
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/dd3f/368f/2a4bb4dc7861fb0f2b874227a5a8afdc?Expires=1660521600&Signature=ghPdw52X6j~jMfmgZD3SMkqLYA1UAhsmXnq5kI1b6k7g-iAEAiFgQkpjCkRWTMND9n0k-w1zwm79QhtYggOOdWu8lcA9FMACMIupIXvnVr~wqGxu2~eAMbcDXzxl-O9aH6G9u6xLF8oSMCoJ1dhI4Yx9WV2eOBCcpBIS9XhePrkYX~xDrW2kxjSOszB4~C9KBjDE~oOw4gva2tkBz8UnQ3eKru-pi~4XFjuHmgsaARChqY5N8jKcRAOnupozNMMccnEST2mb4vVas3XTAnmkP3Yn3nqBugfgVnO5ZhI5TXatg248zhHMxIYrZ4G4lELVsdHbSyipYiDD91bYS6dFwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  style={styles.reaction}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.modalViewBottom}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setFilterVisible(!filterVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  videoContainer: {
    flex: 1,
    width: "110%",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  menuIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    // paddingRight:0,
  },
  centeredView: {
    flex: 1,
    // flexDirection: 'column-reverse',
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
  },
  modalViewTop: {
    width: "98%",
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewBottom: {
    width: "98%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: "40%",
  },
  modalText: {
    marginTop: 10,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  reactionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  reaction: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

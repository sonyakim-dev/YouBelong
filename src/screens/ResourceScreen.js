import {
  Button,
  View,
  Text,
  StyleSheet,
  Linking,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect, Component } from "react";
import resourceData from "../components/ResourceData";
import resourceData2 from "../components/ResourceData2";

console.reportErrorsAsExceptions = false;
class FlatListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.itemSeparator}
        onPress={() => Linking.openURL(this.props.item.link)}
      >
        <View style={styles.resourceCard}>
          <View
            style={{
              width: "30%",
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Image
              style={styles.resourceImg}
              source={{ uri: this.props.item.image }}
            />
          </View>

          <View style={styles.resourceInfo}>
            <Text style={styles.title}>{this.props.item.name}</Text>
            <Text style={styles.description} numberOfLines={4}>
              {this.props.item.description}
            </Text>
            <View style={styles.categoryContainer}>
              <View style={styles.category}>
                <Text style={styles.categoryText}>
                  {this.props.item.category1}
                </Text>
              </View>
              <View style={styles.category}>
                <Text style={styles.categoryText}>
                  {this.props.item.category2}
                </Text>
              </View>
              <View style={styles.category}>
                <Text style={styles.categoryText}>
                  {this.props.item.category3}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// export default class ResourceScreen extends Component {
export default function ResourceScreen(props) {
  console.log(props);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Youth Resources</Text>
        <FlatList
          style={styles.list}
          data={resourceData}
          renderItem={({ item, index }) => {
            return <FlatListItem item={item} index={index} />;
          }}
        />

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingTop: 25,
          }}
        />

        <Text style={styles.header2}>Allies</Text>
        <FlatList
          style={styles.list}
          data={resourceData2}
          renderItem={({ item, index }) => {
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </ScrollView>
    </>
  );
}

// }
// // render() {

// }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  resourceCard: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  resourceImg: {
    resizeMode: "contain",
    // resizeMode: "fit",
    width: "100%",
    aspectRatio: 1 / 1,
  },
  resourceInfo: {
    flex: 2,
    flexDirection: "column",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: "Avenir Next",
    fontWeight: "bold",
    paddingBottom: 4,
    color: "#EC6060",
  },
  description: {
    fontSize: 14,
    fontFamily: "Avenir Next",
  },
  itemSeparator: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    marginTop: 70,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
    fontFamily: "Avenir Next",
  },
  header2: {
    marginTop: 25,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
    fontFamily: "Avenir Next",
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 6,
  },
  category: {
    borderRadius: 15,
    backgroundColor: "#EC6060",
    marginRight: 5,
    padding: 5,
  },
  categoryText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Avenir Next",
  },
});

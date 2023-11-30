import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const shareImage = require("../assets/share.png");
const commentsImage = require("../assets/Comments.png");

const VerticalBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="plus" size={40} color="#FFA500" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="heart" size={40} color="#FFFFFF" />
        <Text style={styles.text}>87</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={commentsImage} style={{ width: 40, height: 40 }} />
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="bookmark" size={40} color="#FFFFFF" />
        <Text style={styles.text}>203</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={shareImage} style={{ width: 40, height: 40 }} />
        <Text style={styles.text}>17</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default VerticalBar;

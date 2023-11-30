import { View, Text, StyleSheet, Image } from "react-native";
import { useContext } from "react";
const timerImage = require("../assets/Timer.png");
import { Ionicons } from "@expo/vector-icons";
import { DataContext } from "../DataContext";

export default function Header() {
  const { minutes } = useContext(DataContext);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.timer}>
        <Image
          source={require("../assets/Timer.png")}
          width={20}
          height={19}
          style={{ marginHorizontal: 6 }}
          resizeMode="contain"
        />
        <Text style={styles.minutes}>{`${minutes}m`}</Text>
      </View>
      <View>
        <Text style={styles.centeredText}>For You</Text>
      </View>
      <View>
        <Ionicons name="search" size={22} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: "green",
    borderWidth: 1,
    height: 60,
    alignItems: "center",
    // height: 31,
  },
  minutes: {
    fontWeight: "normal",
    fontSize: 14,

    // margin: 10,

    color: "white",
  },

  timer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },

  centeredText: {
    fontWeight: "600",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
